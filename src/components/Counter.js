import React from 'react';

const Counter = ({number ,onIncrement, onDecrement,onHello}) =>{
 
    return(
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick ={onIncrement}>+</button>
                <button onClick ={onDecrement}>-</button>
                <button onClick ={onHello}>t</button>
            </div>
        </div>
    )
}

export default Counter;