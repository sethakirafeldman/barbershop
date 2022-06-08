import React from 'react';

export default function Location() {
    const APIkey = process.env.maps_key;
    const query = `the+barbershop,Toronto+Canada`;
    const src = `https://www.google.com/maps/embed/v1/place?key=${APIkey}&q=${query}`;
    return (
        <div>
        <iframe
            width="600"
            height="450"
            src={src}>
        </iframe>
    
        </div>
        
    )
}