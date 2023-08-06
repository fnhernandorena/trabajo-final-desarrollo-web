var express = require('express');
var router = express.Router();
var novedadesmodels = require ('../../models/novedadesmodels');

/* GET home page. */
router.get('/', async function (req, res, next) {
  var novedades = await novedadesmodels.getNovedades();
  res.render('admin/novedades', { layout: 'admin/layout', persona: req.session.nombre, novedades});
});
router.get('/new', (req, res, next)=>{
  res.render('admin/new',{
    layout: 'admin/layout'});
});

/* new */
router.post('/new', async (req, res, next) =>{
  try {
    if(req.body.titulo !='' && req.body.subtitulo !='' && req.body.cuerpo !=''){
      await novedadesmodels.insertNovedad(req.body);
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
      var obj = {
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        cuerpo: req.body.cuerpo
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
   )

    module.exports = router;