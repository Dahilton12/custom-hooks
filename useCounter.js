 import { useState } from "react";

export const useCounter = (initianValue = 10) =>{

    const [counter, setCounter] = useState(initianValue)

    const increment = (value = 1) =>{
        console.log (value)
        setCounter (counter + value);

    }
    const decrement = (value = 1) =>{
        // if(counter===0) return;
        setCounter (counter-value);
    }
    const reset = () => {
        setCounter (initianValue);
    }


    return{
        counter,
        increment,
        decrement,
        reset




    }
 }