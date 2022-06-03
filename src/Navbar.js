import React from 'react';

export default function Navbar () {

    

    const handleClick = () => {
        console.log(event.target.value);
    }

    return (
        <nav id='navigation-bar'>
            <div>
              <button onClick = {handleClick} value="home">Home</button>  
              <button onClick = {handleClick} value="about">About</button>
              <button onClick = {handleClick} value="services">Services</button>
              <button onClick = {handleClick} value="booking">Booking</button>
            </div>
        </nav>
    )
}