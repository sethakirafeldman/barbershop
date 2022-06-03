import React from 'react';

export default function Navbar (props) {

    return (
        <nav id='navigation-bar'>
            <div>
              <button onClick = {props.handleClick} value="home">Home</button>  
              <button onClick = {props.handleClick} value="about">About</button>
              <button onClick = {props.handleClick} value="services">Services</button>
              <button onClick = {props.handleClick} value="booking">Booking</button>
            </div>
        </nav>
    )
}