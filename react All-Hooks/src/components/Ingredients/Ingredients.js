import React, {  useCallback, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';





const ingredientReducer = (currentIngredient, action) => {

  switch(action.type) {
    case 'SET' :
      // New Ingredients : ingredients - New Array of Ingredients  
      return action.ingredients;

    case 'ADD' :
      return [...currentIngredient, action.ingredient];

    case 'DELETE' :
      return currentIngredient.filter( ing => ing.id !== action.id);

    default :
      throw new Error('Should Not get there!');
  }

};




// Goes in  useHttp.js
const httpReducer = ( currentHttp, action ) => {

  switch(action.type){

    case 'SEND' :
      return { loading : true , error : null };

    case 'RESPONSE' :
      return { ...currentHttp, loading : false };

    case 'ERROR' :
      return { loading : false , error : action.errorMessage };

    case 'CLEAR' :
      return { ...currentHttp, error : null };

    default :
      throw new Error('Should Not Be Reached!');

  }

};




const Ingredients = () => {


  // [] Initialization
  const [ userIngredients, dispatch ] = useReducer(ingredientReducer, []);

  const [ httpState, dispatchHttp ] = useReducer( httpReducer, { 
      loading : false,
      error : null
    }
  );


  // const [ userIngredients, setUserIngredients ] = useState([]);
  // const [ isLoading, setIsLoading ] = useState(false);
  // const [ haserror, setHasError ] = useState();
  



  // Manage Side Effects : HTTP Request
  // Runs After Component Render Cycle when Dependency Change
  // Fetching the data From Firebase
  // useEffect( () => {
  //   fetch( 'https://react-hooks-bc82e-default-rtdb.firebaseio.com/Ingredients.json'
  //   ).then ( res => res.json() )
  //   .then ( (resData) => {
  //     const loadedIngredients = [];
  //     for ( const key in resData ){
  //       loadedIngredients.push( {
  //         id : key,
  //         title : resData[key].title,
  //         amount : resData[key].amount
  //       } );
  //     }
  //     setUserIngredients(loadedIngredients);
  //   } );
  // }, [] ); 
  // Don't Need as Search Component Does this Job




  // After Reload All Data Gone:
  // Store the Data Into Firebase
  const addIngredientHandler = useCallback( (ingredient) =>{

    // Loading Spinner
    // setIsLoading(true);
    dispatchHttp( { type : 'SEND' } );

    // fetch returns a Promise
    fetch( 'https://react-hooks-bc82e-default-rtdb.firebaseio.com/Ingredients.json', {

      // Def method : GET 
      method : 'POST',
      // What We want to POST
      body : JSON.stringify(ingredient),
      headers : {'Content-Type' : 'application/json'} 

    } ).then( (response) => {

      // After Getting Response Loading Not Required
      // setIsLoading(false);
      dispatchHttp( { type : 'RESPONSE' } );

      // Returns Value & returns a Promise
      return response.json();

    } ).then ( (responseData) => {

      // setUserIngredients( (prevIngredients) => [
      //   ...prevIngredients, { 
      //     // name Returns ID
      //     id: responseData.name, ...ingredient 
      //   } 
      // ] );

      dispatch( { 
        type : 'ADD', 
        ingredient : { 
          id: responseData.name, ...ingredient 
        } 
      } );

    } ).catch( (errObj) => {

      dispatchHttp( { 
        type : 'ERROR', 
        errorMessage : errObj.message
      } );

    } );

  },[dispatchHttp] );
 



  const removeIngredientHandler = useCallback( (ingredientId) =>{

    // While Removing Loading Indicator
    // setIsLoading(true);
    dispatchHttp( { type : 'SEND' } );


    fetch( `https://react-hooks-bc82e-default-rtdb.firebaseio.com/Ingredients/${ingredientId}.json`, {
      // Def method : GET 
      method : 'DELETE',
    } ).then( (res) => {

      // After Response Loading No Need
      // setIsLoading(false);
      dispatchHttp( { type : 'RESPONSE' } );

      // setUserIngredients( (prevIngredients) => {
      //   return prevIngredients.filter( (fi) => fi.id !== ingredientId);
      // } );

      dispatch( { type : 'DELETE' , id : ingredientId } );

    } ).catch( errorObj => {

      // These Two set Batch Together
      // setHasError(errorObj.message + 'Something Wrong');
      // setIsLoading(false);
      dispatchHttp( { 
        type : 'ERROR', 
        errorMessage : errorObj.message
      } );

    } );
    
  },[dispatch,dispatchHttp] );




  const searchHandler = useCallback( (si) =>{

    // setUserIngredients(si);
    dispatch( {type : 'SET', ingredients : si} );

  },[] );


  
  const clearErrorHandler = useCallback ( () =>{

    // setHasError(null);
    dispatchHttp( { type : 'CLEAR' } );
  },[] );



  const ingredientList = useMemo( () => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  },[userIngredients,removeIngredientHandler] );


  return (

    <div className="App">


      {/* Only Renders ErrorModal When error true */}
      { httpState.error && 
        <ErrorModal onClose={clearErrorHandler}>
          {httpState.error}
        </ErrorModal>
      }


      <IngredientForm 
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />


      <section>
        <Search onLoadIngredients={searchHandler}/>

        {/* <IngredientList 
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        /> */}
        {ingredientList}
      </section>


    </div>

  );



}



export default Ingredients;

