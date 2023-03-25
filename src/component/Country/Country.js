import React from 'react';
import Counter from '../Counter/Counter';
import './Country.css';

const Country = (props) => {
    const {population,flags,area,name}=props.country

    return (
        // way one 
        //<h1>{props.country.name.common} </h1> 

        <div className='country'> 
            <img src={flags.png} alt=""  />
            <h1>{name.common} </h1>      
            <h4> Population : {population} </h4>      
            <h4> Area : {area} </h4> 

            <Counter></Counter>    
        </div>
    );
};

export default Country;