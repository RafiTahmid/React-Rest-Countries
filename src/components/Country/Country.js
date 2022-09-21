import React from 'react';
import './Country.css'
const Country = (props) => {
    
    const {name, capital, population} = props.country;
    return (
        <div className='country'>
            <h1>Country name is: {name.common}</h1>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;