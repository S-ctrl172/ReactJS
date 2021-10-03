import styles from './AddUser.module.css';
import React,{useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import ErrorModal from '../UI/ErrorModal';


// Only Takes the Input


const AddUser = (props) =>{


    // enteredUserName : Holds the Value
    // setEnteredUserName : Change the Value
    const [enteredUserName , setEnteredUserName] = useState('');
    const [enteredAge , setEnteredAge] = useState('');

    const userNameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value);
    }

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }



    // Error Message State
    const [error , setError ] = useState();


    // Click on Button or Screen The Modal Close
    const errorHandler = () =>{
        setError(null);
    };






    const addUserHandler = (event) =>{


        //Stops the Default execusion
        event.preventDefault();


        if(enteredUserName.trim().length == 0  || enteredAge.trim().length == 0 ){
            //If Empty Stop because return stops execusion

            setError({
                title:'Invalid Input',
                message:'Please enter a valid name and age(non-empty).'
            });

            return;
        }

        // + because string compare with number
        if(+enteredAge < 1){

            setError({
                title:'Invalid Age',
                message:'Please enter a valid age > 0.'
            });

            return;
        }

        // Printing The Getting Values
        props.onAddUser( enteredUserName, enteredAge);

        //After Input back to Empty
        setEnteredUserName('');
        setEnteredAge('');

    };






    return (

        <div>

            { error && 
                <ErrorModal 
                    title={error.title} 
                    message={error.message}
                    onConfirm = {errorHandler}
                />
            }

            <Card css={styles.input}>

                <form onSubmit={addUserHandler}>

                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" 
                        onChange={userNameChangeHandler}

                        // After Input back to Nothing
                        value={enteredUserName}/>

                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" 
                        onChange={ageChangeHandler}

                        // After Input back to Nothing
                        value={enteredAge}/>

                    <Button type="submit">Add User</Button>
                

                </form>

            </Card>
        </div>

    );


};

export default AddUser;