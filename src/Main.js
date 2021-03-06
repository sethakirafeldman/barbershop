import React from 'react';
import Location from './Location';
import Services from './Services';
import Booking from './Booking';
export default function Main(props) {

    const condRend = () => {
        if (props.pageName == "Location") {
            return (<Location />)
        }
        else if (props.pageName == "Services") {
            return (<Services/>)
        } 

        else if (props.pageName == "Booking") {
            return (<Booking />)
        }
    }

    return(
        <main>
            <section className='content-container'>
                <h1>Welcome to the Barbershop</h1>
                <button className='booking' onClick={props.handleClick} value= 'booking'>Book Online</button>
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