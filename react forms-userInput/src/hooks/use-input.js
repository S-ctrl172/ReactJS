import { useState } from "react";

const useInput = (validateFunc) =>{

    const [ enteredValue, setEnteredValue ] = useState('');
    const [ isTouched, setIsTouched ] = useState(false);


                        //Function with validation Logic
    const valueIsValid =  validateFunc(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const valueChangeHandler = (event) =>{
        setEnteredValue(event.target.value);
    };
    const valueBlurHandler = () =>{
        setIsTouched(true);
    };

    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }
    

    return {

        enteredValue,
        hasError,
        valueIsValid,
        valueChangeHandler,
        valueBlurHandler,
        reset
    };

};


export default useInput;





// useReducer:
// import { useReducer } from "react";



// const inputStateReducer = (state, action) =>{

//     if(action.type === 'INPUT'){
//         return { 
//             enteredValue: action.value,
//             enteredValueTouched: state.enteredValueTouched
//         };
//     }
//     if(action.type === 'BLUR'){
//         return {
//             enteredValueTouched:true,
//             enteredValue:state.enteredValue
//         }
//     }
//     if(action.type === 'RESET'){
//         return {
//             enteredValueTouched:false,
//             enteredValue:''
//         }
//     }

//     return{
//         // Initial State
//         enteredValue:'',
//         enteredValueTouched:false
//     };

// };



// const useInput = (validateFunc) =>{



//     const [inputState, dispatch] = useReducer( inputStateReducer,{
//         enteredValue:'',
//         enteredValueTouched:false
//         }
//     );

  

//     const enteredValueIsValid = validateFunc(inputState.enteredValue);

//     const hasError = !enteredValueIsValid && inputState.enteredValueTouched;
  


//     const inputChangeHandler = event =>{
//         dispatch({ type: 'INPUT', value:event.target.value });
//     }
//     const inputBlurHandler = () =>{
//         dispatch({ type: 'BLUR' });
//     }



//     const reset = () =>{
//        dispatch({ type: 'RESET' });
//     };



//     return{
//         enteredValue:inputState.enteredValue,
//         enteredValueIsValid,
//         hasError,
//         inputChangeHandler,
//         inputBlurHandler,
//         reset
//     };



// }



// export default useInput;