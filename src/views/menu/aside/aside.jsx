import React from 'react'
import './Aside.css'
import { NavLink } from 'react-router-dom'

export default function aside() {
  return (
    <aside className='aside'>
        <div>
            <NavLink to={'/'} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        </div>

        {/*<div>
            <NavLink to={'peliculillas/'} className={({isActive}) => isActive ? "active" : ""}>PELICULILLAS.</NavLink>
  </div> */}
        <div>
            <NavLink to={'cienciaFiccion/'} className={({isActive}) => isActive ? "active" : ""} > C & F</NavLink>
        </div>

        <div> 
            <NavLink to={'comedia/'} className={({isActive}) => isActive ? "active" : ""} > Comedia </NavLink>
        </div>
        <div>
            <NavLink to={'documental/'} className={({isActive}) => isActive ? "active" : ""} > Docuemntal. </NavLink>
        </div>
        <div>
            <NavLink to={'anime/'} className={({isActive}) => isActive ? "active" : ""} > Anime </NavLink></div>
    </aside>
  );
}

/*    <h1>Barra del menu. </h1>
        
        <span>Terror</span> 
        <span>Anime</span>
        <span>Accion</span>
        <span>Comedia</span>
        
*/
/*
  <aside className="aside">
    
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "linkActive" : "")}
      >
        {" "}
        Home{" "}
      </NavLink>
    
   
      <NavLink
        to={"cienciaFiccion/"}
        className={({ isActive }) => (isActive ? "linkActive" : "")}
      >
        {" "}
        C&F{" "}
      </NavLink>
    
      <NavLink
        to={"comedia/"}
        className={({ isActive }) => (isActive ? "linkActive" : "")}
      >
        {" "}
        COMEDIA{" "}
      </NavLink>

      <NavLink
        to={"independientes/"}
        className={({ isActive }) => (isActive ? "linkActive" : "")}
      >
        {" "}
        Independientes{" "}
      </NavLink>
 
  </aside>
);
}
 */