import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React, { useState } from "react";



const ExpenseItem = (props) =>{



    // One Root Element per return Statement so In One <div>
    // Auto Format Shift+Alt+F



    // useState() React Hook: Start with use
    // Not in nested func , directly into Component Function
    // Always returns an Array with Two Values
    const [title, setTitle] =  useState(props.title);


    const clickHandler = () =>{
        // State Updating Function
        setTitle('Updated!');
    };



    return (

        <Card className="expense-item">

            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">

                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}  
                </div>
                <button onClick = {clickHandler}>
                    Change Title
                </button>

            </div>

        </Card>

    );

}
export default ExpenseItem;