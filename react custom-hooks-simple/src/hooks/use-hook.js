import {useState, useEffect} from "react";

// Custom Hooks Name must start from 'use'
const useHook = ( fowards = true ) =>{

    const [counter, setCounter] = useState(0);

    useEffect(() => {
            
        const interval = setInterval( () => {

            if(fowards){
                setCounter((prevCounter) => prevCounter + 1);
            }
            else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        
        }, 1000);

        return () => clearInterval(interval);

    }, [fowards]);
  

    return counter;

}

export default useHook;
