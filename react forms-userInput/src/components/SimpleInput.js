import useInput from '../hooks/use-input';



const SimpleInput = (props) => {


  const { 
    enteredValue : enteredName ,
    valueIsValid: enteredNameIsValid,
    hasError : nameHasError,
    valueChangeHandler : nameChangeHandler,
    valueBlurHandler : nameBlurHandler,
    reset:nameReset
  } = useInput( validateFunc => validateFunc.trim() !== '' );


  const { 
    enteredValue : enteredEmail ,
    valueIsValid: enteredEmailIsValid,
    hasError : emailHasError,
    valueChangeHandler : emailChangeHandler,
    valueBlurHandler : emailBlurHandler,
    reset:emailReset
  } = useInput( validateFunc => validateFunc.includes('@') );

  



  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }





  const formSubmitionHandler = (event) =>{

    event.preventDefault();

    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    nameReset();
    emailReset();
    
  };





  const nameClasses = nameHasError
  ? 'form-control invalid' 
  : 'form-control';

  const emailClasses = emailHasError
  ? 'form-control invalid' 
  : 'form-control';





  return (

    <form onSubmit={formSubmitionHandler}>


      <div className={nameClasses}>

        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
          onChange={nameChangeHandler}
          value={enteredName}//Two Way Binding
          onBlur={nameBlurHandler}
        />
        {nameHasError && 
          <p className='error-text'>Name Must Not Be Empty!!</p>
        }

      </div>



      <div className={emailClasses}>

        <label htmlFor='name'>Your Name</label>
        <input type='email' id='name' 
          onChange={emailChangeHandler}
          value={enteredEmail}//Two Way Binding
          onBlur={emailBlurHandler}
        />
        {emailHasError && 
          <p className='error-text'>Email Must Not Be Empty!!</p>
        }

      </div>


    
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>


    </form>

  );

};


export default SimpleInput;
