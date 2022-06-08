import React from 'react';
import beard from "./assets/beard.jpg";
import fade from "./assets/fade.jpg";
import chevronR from "./assets/chevron-right.png";
import chevronL from "./assets/chevron-left.png";

export default function Carousel(){
  
    return (
        
        <div className='outer-carousel'>
        <img src={chevronL} id="chevronL" /> 
        <div className='carousel-container'>
            <img src={beard} className="carousel-image active"/>
            <img src={fade} className="carousel-image inactive"/>
        </div>
        <img src={chevronR} id="chevronR" />
        </div>
    )
}