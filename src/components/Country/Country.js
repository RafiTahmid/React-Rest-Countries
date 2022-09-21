import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h1>Country name is: {props.name}</h1>
            <h3>Capital: {props.capital}</h3>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;