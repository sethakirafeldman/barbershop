import React from 'react';
import chevronR from "../public/assets/chevron-right.png";
import chevronL from "../public/assets/chevron-left.png";
import images from "./images.json";

export default function Carousel() {
    const [index, setIndex] = React.useState(0);

    const chevBtn = (dir) => {
        if(index < 0 || index > images.assets.length) {
            setIndex(0)
        }

        else if (dir == "left") {
            setIndex(index-1);
        }
    
        else if (dir == "right") {
            setIndex(index+1);
        }

    };

    return (
        
        <div className='outer-carousel'>
            <img src={chevronL} className="chevron" onClick={()=> chevBtn("left")}  /> 
                <div className='carousel-container'>
                    <img src={images.assets[index].src} className="carousel-image active" />
                </div>
            <img src={chevronR} className="chevron" onClick={() => chevBtn("right")} />
        </div>
    )
}