import React from 'react';
import Location from './Location';

export default function Main(props) {

    const condRend = () => {
        if (props.pageName == "Location") {
            return (<Location />)
        }
    }

    return(
        <main>
            <section className='content-container'>
            <h1>Welcome to Sandro's</h1>
            <button className='booking'>Book Online</button>
            <h4>Call: 555-555-5555</h4>
            </section>
            <div className='page-container'>
                <h2>{props.pageName}</h2>
                <p>{props.text}</p> 
                {condRend()}
            </div>
        </main>
    )

}