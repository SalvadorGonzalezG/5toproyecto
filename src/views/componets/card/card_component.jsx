import './card_component.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from 'react';




export default function Card({ movie }) {  /*creando un componente la function inicia con mayuscula*/
  //const [passwordState, setPassword] = useState(); //1 hook de estado useState como se compone el hook, existe el useSate que el dedicado para manejar los estados, valor global que es dinamico, para declarar un estado nececito declarar una constante en forma de arreglo como primer elemento, el nombre de la variable del estado, segundo parametro guarda una funcion y esta función va a ser destinada para actualizar la variable de estado
  const [isLikes, setIsLiked] = useState(false)

  const handlerLike = (e) => {
    setIsLiked(!isLikes)
  }
  /* setIsLiked(!isLike) =
  if(isLikes){
<    setIsLiked(false)
  }else{ setIsLiked(true)
  }
  } */

  //Actualización de estado dentro de una función funcion que puede ser llamada por cualquier evento de mis etiquetas onclick onchange ontap etc...
  /* function handlerInput(e) {  
    //console.log(e.target.value.length) //1 para obtener el valor que se escriba en el input .placeholder para su valor
    /*const passwordLength = e.target.value.length //me interesa el valor que esta dentrro del target.
    const validacion = passwordLength >= 8
    setPassword(validacion) */ //validación guardar un true o un false en el estado.} 

  return ( //varios renglones el return se coloca entre parentesis 


       
        <div style={{ color: '' }} className="card-style">
      <img src={movie.portada} alt='' className='portada' />

      <div className='movie-description ma-10'>

        <div className='movie-description-info'>
          <h1 className='movie-title'>{movie.titulo}</h1>
          <p className='movie-subtitle'>{movie.director}</p>
          <p>{movie.año}</p>
        </div>

        <div className='like-buton'>
          <span onClick={handlerLike}> {isLikes ? <FaHeart className='icon-red' /> : < FaRegHeart className='icon-red' />} </span> {/*envia un evento e */}
        </div>
        {/*  <p className={ movie.clasificacion ? 'styleGreen' : 'styleRed' }>*</p> */}
      </div>
      {/*1<div>
                  <input type="password" className={passwordState ? 'styleGreen' : 'styleRed' } placeholder='password' onChange={handlerInput}/> 
                  {passwordState ? <span className='styleGreen'>ok</span> : <span className='styleRed'> Debe contener 8 caracteres</span> } 
                  </div> */ }
    </div>

  );
}

//export default Card

/**OPERADOR TERNARIOS Estructura
 *  condición ? true : false
 */