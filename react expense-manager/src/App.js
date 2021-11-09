import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Expenses from "./Components/Expenses/Expenses"
import NewExpense from './Components/NewExpense/NewExpense';




const DUMMY_EXPENSES = [

  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 0, 31)
  },

  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 5, 19)
  },

  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 7, 19)
  },

  {
    id: 'e4',
    title: 'New Desk(Wooden)',
    amount: 450,
    date: new Date(2022, 7, 1)
  }

];



const  App = () => {



  // Alternative of Below JSX Code

  // return React.createElement(
  //   'div',
  //   {},//Attribute on this div
  //   React.createElement('h2',{},'React App.js'),
  //   React.createElement(Expenses,{items:expenses})         
  // );

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (parameter) =>{

    setExpenses( (prevExpenses) =>{

        return [parameter, ...prevExpenses];

    } );

  };


  return (
    <div>

      {/*props = properties  */}


      <h2>React App.js</h2>
      
      <NewExpense onAddExpense = {addExpenseHandler}/>

      <Expenses items  = {expenses}/>

      

    </div>

  );
  
}

export default App;


// Passing Data From Parent to Child props
//Passing data from Child(ExpenseForm) to Parent(App)