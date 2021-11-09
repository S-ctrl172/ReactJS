import "./Expenses.css"
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){   


    const [filteredYear, setFilteredYear] = useState('2020');


    const filterChangeHandler = (selectedYear) =>{

        setFilteredYear(selectedYear);

    };


    const filteredExpenses = props.items.filter( (year) =>{
            return year.date.getFullYear().toString() == filteredYear;
        }
    );



    return(

        <li>
            
            <Card className="expenses">


                <ExpensesFilter 
                    selected = {filteredYear}
                    onFilterChangeHandler={filterChangeHandler}
                />

                <ExpensesChart expenses={filteredExpenses}/>

                <ExpensesList items = {filteredExpenses}/>
                

            </Card>

        </li>

    );
};

export default Expenses;