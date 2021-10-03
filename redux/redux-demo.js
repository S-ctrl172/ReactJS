const redux = require('redux');


// Inputs: Old State + Dispatch Action
// Output: New State Object
const reducerFunc = (state = {counter:0}, action) => {

    if(action.type === 'increment'){
        return {
            // Existing Counter + 1
            counter: state.counter + 1
        };
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        };
    }

    // Unchanged State
    return state;
    
};


const store =  redux.createStore(reducerFunc);


const reducerSubscriber = () =>{
    // Gives Latest State after Update
    const latestState = store.getState();
    console.log(latestState);
};


store.subscribe(reducerSubscriber);

store.dispatch( {type: 'increment'} );
store.dispatch( {type: 'decrement'} );
