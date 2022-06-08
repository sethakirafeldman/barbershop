import React from 'react';
import beard from "./assets/beard.jpg";
import fade from "./assets/fade.jpg";
import chevronR from "./assets/chevron-right.png";
import chevronL from "./assets/chevron-left.png";

export default function Carousel() {
    const [index, setIndex] = React.useState(0);

    const chevBtn = () => {
        let parentEl = event.target.parentElement;
        let activeImg = parentEl.children[1].children[0];
        console.log(activeImg);
        setIndex(activeImg.key);
        console.log(index);
        // change image as index increments.
    };

    return (
        
        <div className='outer-carousel'>
            <img src={chevronL} className="chevron" onClick={chevBtn}  /> 
                <div className='carousel-container'>
                    <img src={beard} className="carousel-image active" key={0}/>
                    <img src={fade} className="carousel-image inactive" key={1}/>
                </div>
            <img src={chevronR} className="chevron" onClick={chevBtn} />
        </div>
    )
}