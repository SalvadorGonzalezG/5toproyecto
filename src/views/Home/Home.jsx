import React from 'react'
import Navbar from '../menu/navbar'
import { Outlet } from 'react-router-dom'
import "./Home.css";
import Aside from '../menu/aside/aside.jsx'
import Carousel from '../componets/card/Carousel.jsx'
//import { Carousel } from 'bootstrap';


export default function Home() {
  return (
   <>
        <div> 
          <Navbar /> 
        </div>
        <div className="carous" ><Carousel /></div>
        
        <div className='main-container'>
      
         <Aside className="aside-item" /> 
                 
                
         <Outlet className="outlet-item" /> {/* para que tenga hijos el home tenemos que declarar la etiqueta Outlet que dice que los hijos alli van a estar es lo que pinta a children de dorma estatica*/}
          
        </div>
        
    
    </>
  )
}
