import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice( { 

    name : 'counter',
    initialState : { counter: 0, showCounter : true },
    reducers : { 
        increment(state) {
            state.counter++;//Here Allowed
        },
        //             Action Payload
        increase(state,action) {
        // payload is Mendatory
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }

} );

export const counterActions =  counterSlice.actions;

export default counterSlice.reducer;