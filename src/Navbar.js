import React from 'react';
import menuIcon from "../public/assets/menu_icon.png"
const data = require("./data.json");

export default function Navbar (props) {
    const dataArr = Object.values(data);
    
    const [showMenu, setShowMenu] = React.useState(false);

    const genBtns = dataArr.map((item, index) => {
            // console.log(item[0]);
            return (
            <button 
                key = {item[0].id} 
                onClick = {props.handleClick} 
                value={item[0].name.toLowerCase()}>{item[0].name}
            </button>)
        })
    const toggleMenu = () => {
        !showMenu ? setShowMenu(true) : setShowMenu(false);
    }

    return (
        <nav id='navigation-bar'>
            <div id='nav-buttons'>
                {genBtns}
            </div>

            <div id='hamburger-menu'>
                <div id ="hamburger-items">
                    <img 
                        src={menuIcon} 
                        className="hamburger-icon"
                        onMouseEnter={toggleMenu}
                    />
                    <div 
                        className={showMenu ? "hamburger-list" : "hamburger-list hidden"}
                        onMouseLeave={toggleMenu}>
                        {genBtns} 
                    </div>
                </div>
            </div>
        </nav>
    )
}