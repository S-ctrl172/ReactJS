// Reuseable Component for Taking Input Only

import styles from './Input.module.css';

import React from 'react';//React.forwardRef
//useRef for Custom Component



const Input = React.forwardRef( (props, ref) =>{

    return (
        <div className={styles.input}>

            <label htmlFor={props.input.id} >
                {props.label}
            </label>

                   {/* type: text get from Label */}
            <input {...props.input} ref={ref}/>

        </div>
    );
} );


export default Input;

