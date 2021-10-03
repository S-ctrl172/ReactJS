
import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";



const Meals = () =>{

    return (
        <React.Fragment>
            
            {/* Total MEAL Section Gathers Here */}


            {/* After Image The Black Section */}
            <MealsSummary/>

            {/* After Black the White Section where Meals are Listed */}
            <AvailableMeals />
            
        </React.Fragment>
    );
}

export default Meals;