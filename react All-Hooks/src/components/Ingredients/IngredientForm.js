import React,{ useState } from 'react';
import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from '../UI/LoadingIndicator';


const IngredientForm = React.memo ( props => {

  
  // Root Level
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, seEnteredAmount] = useState('');


  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value)
  };
  const amountChangeHandler = (event) =>{
    seEnteredAmount(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddIngredient( {
      title : enteredTitle,
      amount : enteredAmount
    } );
  };



  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>


          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" 
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" 
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>

            {/* {props.loading ? <LoadingIndicator/> : null} */}

            {/*LoadingIndicator only Render when props.loading True  */}
            {props.loading && <LoadingIndicator/> }
          </div>


        </form>
      </Card>
    </section>
  );


});

export default IngredientForm;
