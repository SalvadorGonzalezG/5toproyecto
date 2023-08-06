import React from 'react';
/*import React, { Children } from 'react'*/
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Pelicula from './views/peliculas/pelicula.jsx' // ruta donde se encuentra "Card"
import './index.css'
import Navbar from './views/menu/navbar.jsx'
import Footer from './views/footer/Footer.jsx'
import Home from './views/Home/Home.jsx';
import Peliculas from './views/peliculas/pelicula.jsx';
import Carousel from './views/componets/card/Carousel.jsx';

const router = createBrowserRouter([ //guarda un array de objetos
  { 
    path:"/", //direccion 
    element: <Home />, //elementos
    errorElement: <h1>404 Page not found :[! </h1>,
      children: [ // si tiene hijos  se agregan y si no continuar con los rutas normales
      {
        path:"/",
        element:<Peliculas type="peliculillas" key="peliculillas" />,
      },  
      {
        path: "/cienciaFiccion",
        element: <Peliculas type="cienciaFiccion" key="cienciaFiccion" />,
    
        },
        {
          path:"/comedia",
          element: <Peliculas type="comedia" key="comedia" />, //key
          },
        {
          path:"/documental",
          element: <Peliculas type="documental" key="documental" />, //reutilizamos nuestro codigo (Perliculas) y con Key hacemos que este cmabie y se identifica
          },
          {
            path:"/anime",
            element: <Peliculas type="anime" key="anime" />, //reutilizamos nuestro codigo (Perliculas) y con Key hacemos que este cmabie y se identifica
            }
        ]
      },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router} />
    
    {/*<Navbar/>
    <Pelicula/>
<Footer />*/}

  </React.StrictMode>
)

