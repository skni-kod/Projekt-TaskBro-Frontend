import React, {useState} from 'react';

function Counter(){
    
    const [count, useIncrease] = useState(0);

    const increaseValue = () => {
        useIncrease(count+1);
    }

    const decreaseValue = () => {
        useIncrease(count-1);
    }

    const resetValue = () => {
        useIncrease(0);
    }
    return(
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={decreaseValue}>-</button>
            <button onClick={resetValue}>reset</button>
            <button onClick={increaseValue}>+</button>
        </>
    );
}

export default Counter