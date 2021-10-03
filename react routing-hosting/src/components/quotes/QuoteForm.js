import React, { useRef, useState } from 'react';
import { Prompt } from 'react-router';


import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

  const [ isEntering, setIsEntered ] = useState(false);


  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }


  const formFoucusHandler = () =>{
    setIsEntered(true);
  };

  const finishedHandler = () =>{
    setIsEntered(false);
  };



  return (

    <React.Fragment>

      <Prompt when={isEntering} message={ (location) => 'Are You Sure? Data will Lost'}
      />

      <Card>

        <form 
          onFocus={formFoucusHandler} 
          className={classes.form} 
          onSubmit={submitFormHandler}
        >


          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>

          <div className={classes.actions}>
            <button onClick={finishedHandler} className='btn'>Add Quote</button>
          </div>


        </form>

      </Card>
    </React.Fragment>

  );
};

export default QuoteForm;
