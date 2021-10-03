import useInput from "../hooks/use-input";



const BasicForm = (props) => {



  const { 
    enteredValue:enteredFirstName,
    valueIsValid:firstNameIsValid,
    hasError:firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    valueBlurHandler:firstNameBlurHandler,
    reset:firstNameReset
  } = useInput(validateFunc => validateFunc.trim() !== '');



  const { 
    enteredValue:enteredLastName,
    valueIsValid:lastNameIsValid,
    hasError:lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    valueBlurHandler:lastNameBlurHandler,
    reset:lastNameReset
  } = useInput(validateFunc => validateFunc.trim() !== '');



  const { 
    enteredValue:enteredEmail,
    valueIsValid:emailIsValid,
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    valueBlurHandler:emailBlurHandler,
    reset:emailReset
  } = useInput( validateFunc => validateFunc.includes('@') );



  let formIsValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid = true;
  }



  const fromSubmitionHandler = (event) =>{

    event.preventDefault();

    if(!formIsValid){
      return;
    }

    console.log('Submitted!');
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameReset();
    lastNameReset();
    emailReset();

  }



  const firstNameClass = firstNameHasError
  ? 'form-control invalid'
  : 'form-control'

  const lastNameClass = lastNameHasError
  ? 'form-control invalid'
  : 'form-control'

  const emailClass = emailHasError
  ? 'form-control invalid'
  : 'form-control'





  return (


    <form onSubmit={fromSubmitionHandler}>



      <div className='control-group'>

        <div className={firstNameClass}>

          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' 
            onChange={firstNameChangeHandler}
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && 
            <p className="error-text">You Must Enter A First Name!</p> 
          }

        </div>


        <div className={lastNameClass}>

          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' 
            onChange={lastNameChangeHandler}
            value={enteredLastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && 
            <p className="error-text">You Must Enter A Last Name!</p> 
          }

        </div>

      </div>



      <div className={emailClass}>

        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' 
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailHasError && 
            <p className="error-text">You Must Enter A Email!</p> 
          }

      </div>
      


      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button> 
      </div>



    </form>

  );


};



export default BasicForm;
