import React from 'react';
// import background from './assets/chair.jpg';

export default function Main(props) {

    console.log(props.current);
    // conditionally render obj in page-container based on prop

    return(
        <main>
            <section className='content-container'>
            <h1>Welcome to Sandro's</h1>
            <button className='booking'>Book Online</button>
            <h4>Call: 555-555-5555</h4>
            </section>
            <div className='page-container'>{props.current}</div>
        </main>
    )

}