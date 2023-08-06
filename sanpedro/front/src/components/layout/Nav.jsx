import { NavLink } from "react-router-dom";
import '../../styles/components/layout/nav.css'
const Nav = (props) => {
    return (<nav><div className="botonera">
      <NavLink to="/" className={({ isActive})=> isActive ?"activo" :
    undefined }>
            <div className="boton">  Home</div>
        </NavLink>
       <NavLink to="/novedades" className={({ isActive})=> isActive ?"activo" :
    undefined }>
           <div className="boton">   Novedades</div>
        </NavLink>
        <NavLink to="/nosotros" className={({ isActive})=> isActive ?"activo" :
    undefined }>
          <div className="boton"> Nosotros </div>
        </NavLink>
         <NavLink to="/contacto" className={({ isActive})=> isActive ?"activo" :
    undefined }>
          <div className="boton">  Contacto</div>
        </NavLink></div> </nav>)
}
export default Nav;