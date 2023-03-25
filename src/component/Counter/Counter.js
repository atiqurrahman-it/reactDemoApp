import React, { useState } from 'react';

const Counter = () => {
    const [booster,setBooster]=useState(1)
    const BoostPower=()=>{
        const newBoost=booster*2
        setBooster(newBoost)
    }
    return (
        <div>
            <h1> Power  : {booster} </h1> 
            <button onClick={BoostPower} className="btn btn-primary"> Boost Your Power </button>  
        </div>
    );
};

export default Counter;