import React from 'react';
import { useState } from 'react';

const Counter = () => {
    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter += 1)
    }

    function decrement() {
        if (counter <= 0) {
            setCounter(counter = 0)
        } else {
            setCounter(counter -= 1)
        }
    }

    function reset() {
        setCounter(counter = 0)
    }

    return(
        <div className='counter-container'>
            <h1>{counter}</h1>
            <button className='counter__btn' onClick={increment}>Increment</button>
            <button className='counter__btn' onClick={decrement}>Decrement</button>
            <button className='counter__btn' onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;