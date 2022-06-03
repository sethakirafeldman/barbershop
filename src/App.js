import React from 'react';
import "./style.css"
import Navbar from "./Navbar";
import Main from './Main';

export default function App(props) {

    const [currentPage, setCurrentPage] = React.useState("home");

    const handleClick = () => {
        console.log(event.target.value);
        setCurrentPage(event.target.value);
    }


    return(
    <>
        <Navbar 
            handleClick= {handleClick}
            currentPage = {currentPage}
        />
        <Main current = {currentPage} />
    </>
    )
};