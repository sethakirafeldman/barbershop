import React from 'react';
const data = require("./data.json");

export default function Navbar (props) {
    // const genBtns = () => {
    //     Object.values(data).map((item, index) => {
    //         console.log(item[0]);
    //         return <button onClick = {props.handleClick} value={item[0].name}>{item[0].name}</button>
    //     })
    // }

    return (
        <nav id='navigation-bar'>
            <div id='nav-buttons'>
            {/* {genBtns()} */}
              <button onClick = {props.handleClick} value="home">Home</button>  
              <button onClick = {props.handleClick} value="about">About</button>
              <button onClick = {props.handleClick} value="services">Services</button>
              <button onClick = {props.handleClick} value="booking">Booking</button>
              <button onClick = {props.handleClick} value="location">Location</button>
            </div>
        </nav>
    )
}