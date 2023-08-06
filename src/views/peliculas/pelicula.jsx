import React, {useState, useEffect} from "react"; /* destructura la funcion usestate tiene la responsabilidad de manejar estados. */
import { Link } from "react-router-dom";
import Card from '../componets/card/card_component';
import './style/pelicula.css';
import { Col, Row } from "react-bootstrap";
//import pelisjson from './pelisjson.json'


/* export default function Pelicula() {
    /* const [counter, setCounter] = useState(0) /* 1tiene que tener 2 cosas en forma de arreglo *variable con la que se identifica el estado y 2 palabra reservada Set */
    /*const handlerCount = () => {setCounter(counter + 1) */ //1suma a la variable counter +1 por cada vez que se realice on click
   /* const [pelisState, setPelis]= useState([]) //ingresar peliculas
    const [loading, setLoading] = useState(true) //guarda estado se inicia en true para que diga que esta cargando cuando empieza a cargar la pagina
    const [error, setError] = useState(null) //para manejo de errores de la api y mandar al usuario el tipo de error

    useEffect(() =>{ //hook para servisios externos consultar una appi
     const getPelis = async () => {  //para utilizar el await necesitamos decir a mi funcion que es asincrona de lo contrario no va a entender.
        try { //intenta hcer algo dentro del bloque y si hay un error lo mand al catch
        const response = await fetch('http://localhost:3000/getPelis') //guarda en la variable lo que me regrese mi API.
        const data = await response.json(); // transformacion de la respuesta todo lo que me entregue la api se va a convertir a formato json si un await esta definido antes esta const tambien utilizara await para que no ocurra un error ya que ambas tareas van de la mano
        setPelis(data)
        } catch (error){
            setError(error)
        }
    }
    getPelis();
    }, []) //arreglo vacio para que no este haciendo peticiones constantemente solo unicamnete una peticion
console.log(pelisState);
    return (
        <div className="container-movies"> 
           {pelisjson.peliculas.map((movie, index) => /*codigo js iniciando con parentesis. */
         /*   <Card movie={movie} key={index}/> /* cuando se repiten elementos se nececita indicar con un index para que se diferencia de una tarjeta a otra  pasamos el promp completo cada elemento del json*/
          /* )}
           {/*<h2>{counter}</h2>  <button onClick={handlerCount}> add</button> *//*} */
        /*</div>
    );
        } */
/* Crear un componente para el menu, 
    crear un componente para el footer,
    crear un componente para el submenu.
*/
/* *HOOK -> Función que es destinada para una tarea especific
 uno de ellos useState ->hook que permite manejar el estado de un componente.  */
 export default function Pelicula(props){ //exportamos con parametros de la petición
    const [pelisState, setPelis] = useState ([]); //se inicia con un arreglo vacio
    const [loading, setLoading] = useState (true);//segundo estado para la parte de loading es un estado booleano
    const [error, setError] = useState(null);

useEffect(() => { //se dispara en cualquier momento no se tiene mucho control de este se inicializa cada vez que se renderisa js para consultar datos de servisions externos como una api
    if(loading){ //pregunta por el estado
        console.log("fetching data");
        console.log(`http://localhost:3000/${props.type}`)
        fetch(`http://localhost:3000/${props.type}`) //desde moockon servidor.
        .then((response)=> response.json())
        .then((data) => {
            
            setPelis(data.peliculas);
            setLoading(false); //se cambia el estado para que no lo este repitiendo
        })
    }
}, []);

if (loading){
    return (
        <div>
    <h1>Loader</h1>;
        </div>
    );
}else {
    return(
    <div className="container-movies">
        

        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col">
                <h2 className="genero-title mt-5">{pelisState.genero}</h2>
                </div>
            </div>

        
        <Row className="row row-items">
            {pelisState.map((movie, index)=> (
                <Col xs={12} sm={6} md={4} lg={3} key={index} className="items" >
                <Card movie={movie} key={index} />
                </Col>
            ))}
            </Row>
        </div>
    </div>
        
    )
}

 }
 