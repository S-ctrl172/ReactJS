import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

import React,{useRef, useState} from 'react';



const MealItemForm = (props) =>{

    const [ amountIsValid, setAmountIsValid ] = useState(true);

    const amoutInputRef = useRef();



    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amoutInputRef.current.value;

        // String To Number
        const enteredAmountNumber = +enteredAmount;

        if( enteredAmount.trim().length === 0 || 
            enteredAmount < 1 ||
            enteredAmount > 5 
        ){
            setAmountIsValid(false);
            return;
        }


        props.onAddToCart(enteredAmountNumber);

    };






    return (

        // Right Section of White Section
        <form className={styles.form} onSubmit={submitHandler}>


            {/* Input as Reuseable Component  UI Input Component*/}
            {/* Expects:  label, input*/}

            {/*  input : {js evaluation} {object}  */}
            <Input  
                //Imput Component React.Forward
                ref={amoutInputRef}
                label='Amount' 
                input={ 
                    { 
                        id :'amount_' + props.id, //Every one gets different
                        type : 'number',
                        min : '1',
                        max: '5',
                        step: '1',
                        defaultValue : '1'
                    } 
                }
            />

            <button>+ Add</button>

            {!amountIsValid && <p>Please Enter A Valid Amount(1-5)</p>}


        </form>


    );
}

export default MealItemForm;