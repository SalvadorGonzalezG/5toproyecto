import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

export default function UncontrolledExample() { 
  return (
    <div className='carouse'>
    <Carousel className='carousel_1'>
      <Carousel.Item className='car'>
        <img
          className="d-block w-100"
          src="./imagen/gragon.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='car'>
        <img
          className="d-block w-100"
          src="./imagen/bulba.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='car'>
        <img
          className="d-block w-100"
          src="./imagen/ani.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

//export default UncontrolledExample;