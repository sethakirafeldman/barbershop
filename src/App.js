import React from 'react';
import Navbar from "Navbar";
import background from './assets/chair.jpg';

export default function App() {
    return(
        <>
        <Navbar />
        <main>
            <img src={background} alt="background"/>
        </main>

        </>
    )
};