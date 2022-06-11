import React from 'react';
const data = require("./data.json");

export default function Navbar (props) {
    const dataArr = Object.values(data);
    let genBtns = dataArr.map((item, index) => {
            // console.log(item[0]);
            return (
            <button 
                key = {item[0].id} 
                onClick = {props.handleClick} 
                value={item[0].name.toLowerCase()}>{item[0].name}
            </button>)
        })
  

    return (
        <nav id='navigation-bar'>
            <div id='nav-buttons'>
                {genBtns}
            </div>
        </nav>
    )
}