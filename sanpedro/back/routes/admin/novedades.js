var express = require('express');
var router = express.Router();
var novedadesmodels = require ('../../models/novedadesmodels');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
/* GET home page. */
router.get('/', async function (req, res, next) {
  var novedades = await novedadesmodels.getNovedades();
  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 200, 
        height: 200,
        crop:'fill'
      });
      return{
        ...novedad, imagen
      }
    } else {
      return {
        ...novedad,
        imagen:''
      }
    }
  })
  res.render('admin/novedades', { layout: 'admin/layout', persona: req.session.nombre, novedades});
});
router.get('/new', (req, res, next)=>{
  res.render('admin/new',{
    layout: 'admin/layout'});
});

/* new */
router.post('/new', async (req, res, next) =>{
  try {
    var img_id = '';  
    if(req.files && Object.keys(req.files).length>0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }
    if(req.body.titulo !='' && req.body.subtitulo !='' && req.body.cuerpo !=''){
      await novedadesmodels.insertNovedad({...req.body, img_id});
      res.redirect('/admin/novedades');
    } else {
      res.render ('admin/new',{layout: 'admin/layout' , error: true, message: 'Todos los campos son requeridos' })}}
     catch (error) {
      console.log(error)
    res.render('admin/new', {layout: 'admin/layout', error: true, message :'No se cargo la novedad' })
    } })
/* delete */

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let novedad = await novedadesmodels.getNovedadById(id);
  if(novedad.img_id) {
    await (destroy(novedad.img_id));
  }
  await novedadesmodels.deleteNovedadById(id);
  res.redirect('/admin/novedades');
}
)
/* editar */
    router.get('/editar/:id', async (req, res, next) => {
      var id = req.params.id;
      console.log(req.params.id);
      var novedad = await novedadesmodels.getNovedadById(id);

      console.log(req.params.id);
      res.render('admin/editar', { layout: 'admin/layout', novedad})
    });

   router.post('/editar', async (req, res, next) =>{
    try{

let img_id = req.body.img_original;
let borrar_img_vieja = false;
if (req.body.img_delete === "1"){
  img_id= null;
  borrar_img_vieja=true;
} else {
  if ( req.files && Object.keys(req.files).length>0){
    imagen = req.files.imagen;
    img_id = (await uploader(imagen.tempFilePath)).public_id;
    borrar_img_vieja = true;
  }
}
if (borrar_img_vieja && req.body.img_original){
  await (destroy(req.body.img_original));
}
      var obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo,
        img_id
      }
    
      await novedadesmodels.editarNovedadById(obj, req.body.id);
      res.redirect('/admin/novedades');
    }
    catch (error) {
      console.log(error)
      res.render('admin/editar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico la novedad'
      })
    }
   }
   );

    module.exports = router;