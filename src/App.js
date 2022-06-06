import React from 'react';
import "./style.css"
import Navbar from "./Navbar";
import Main from './Main';
const data = require('./data.json');

export default function App(props) {
    const [currentPage, setCurrentPage] = React.useState("home");
    
    const handleClick = () => {
        console.log(event.target.value);
        setCurrentPage(event.target.value);
    }
    // console.log(data[currentPage][0])

    return(
    <>
        <Navbar 
            handleClick= {handleClick}
            currentPage = {currentPage}
        />
        <Main 
            pageName = {data[currentPage][0].name}
            handleClick = {handleClick}
            text = {data[currentPage][0].text}
        />
    </>
    )
};