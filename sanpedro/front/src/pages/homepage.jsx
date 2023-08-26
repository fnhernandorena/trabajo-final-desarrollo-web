import '../styles/components/pages/HomePage.css'
import '../../src/index.css'

const HomePage = (props) => {
    return (
        <main className='caja'>
            <div className='inicio'> <h2>¡Bienvenidos!</h2>
                <p>Esta pagina esta creada con fines de promover el turismo y agilizar tu visita por San Pedro recomendandote los mejore lugares!</p>
                <h3>Historia</h3>
                <p> El pueblo toma forma en 1750 con la construcción del Antiguo Convento de Franciscanos, aquí se forjaron los primeros pobladores.
                    El 25 de julio de 1907 fue declarada ciudad y allí el nacimiento de su escudo que representa las 3 actividades de aquellos años: Ganadería, agricultura y el puerto.</p>
                <h3>Ubicacion</h3>
                <p>Estamos ubicados sobre la ruta nacional 9, exactamente entre Buenos Aires y Rosario, sobre el rio Parana a una hora de San Nicolas y de Zarate.</p>
                <img src="./public/maps.png" alt="mapa de la ruta 9" />
            </div>

        </main>
    );
}

export default HomePage