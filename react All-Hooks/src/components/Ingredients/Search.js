import React,{ useState, useEffect, useRef } from 'react';
import Card from '../UI/Card';
import './Search.css';


const Search = React.memo( props => {

  const [enteredFilter, setEnteredFilter ] = useState('');
  const { onLoadIngredients } = props;
  const inputRef = useRef();


  // HTTP Request to Fetch the data when enteredFilter value Changes
  useEffect( () => {


    // Every 5 sec HTTP Request Send
    const timer = setTimeout( () => {

      // 5 sec Ago value vs Current Value
      if(enteredFilter === inputRef.current.value){

        const query = enteredFilter.length === 0 ? 
        '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
    
        fetch( 'https://react-hooks-bc82e-default-rtdb.firebaseio.com/Ingredients.json' + query)
        .then ( res => res.json() )
        .then ( (resData) => {
          const loadedIngredients = [];
          for ( const key in resData ){
            loadedIngredients.push( {
              id : key,
              title : resData[key].title,
              amount : resData[key].amount
            } );
          }
          // props.onLoadIngredients();
          onLoadIngredients(loadedIngredients);
          
        } );

      }

    },500 );


    // CleanUp Function Runs Before Next Time
    return () => {
      clearTimeout(timer);
    };

  },[enteredFilter,onLoadIngredients,inputRef] );




  const filterChangeHandler = (event) =>{
    setEnteredFilter(event.target.value);
  };




  return (

    <section className="search">
      <Card>

        <div className="search-input">
          <label>Filter by Title</label>
          <input 
            type="text" 
            value={enteredFilter}
            onChange={filterChangeHandler}
            ref={inputRef}
          />
        </div>

      </Card>
    </section>

  );

} );

export default Search;



// Ingredients: {
//   ".indexOn" : ["title"]
// }