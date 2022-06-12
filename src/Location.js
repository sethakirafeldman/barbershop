import React from 'react';

export default function Location() {
    console.log(process.env.MAPS_KEY);
    const APIkey = process.env.MAPS_KEY;
    const query = `the+barbershop,Toronto+Canada`;
    const src = `https://www.google.com/maps/embed/v1/place?key=${APIkey}&q=${query}`;
    return (
        <div>
            <iframe
                width="100%"
                height="100%"
                src={src}>
            </iframe>
        </div>
        
    )
}