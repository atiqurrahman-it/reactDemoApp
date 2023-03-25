import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [Countries,setCountries]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountries(data))
    },[])



    return (
        <div className='container-fluid text-center'>   
            <h1 > Rest Countries </h1>
            <p >Available Countries : {Countries.length} </p>

            <div className='countries'>

                {
                    Countries.map(country=><Country country={country} key={country.cca3}></Country>)
                }

             
                
                {/* way two  */}

                {/* {
                  Countries.map(country=><Country 
                    name={country.name.common} 
                    population={country.population}
                    area={country.area}
                    flag={country.flags.png}
                    ></Country> )
                } */}


                
            </div>
        </div>
    );
};

export default Countries;