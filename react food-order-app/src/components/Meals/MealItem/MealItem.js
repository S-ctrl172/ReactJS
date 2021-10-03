import styles from './MealItem.module.css';

// Right Side 
import MealItemForm from './MealItemForm';

import React,{useContext} from 'react';
import CartContext from '../../../context/cart-context';



// Total Left and Right Side Combine
const MealItem = (props) =>{

    const ctx  = useContext(CartContext);


    // Formatting the Price $(actual dollar)$(templet Literal)
    const price = `$${props.price.toFixed(2)}`;


    const addToCartHandler = amount =>{
        ctx.addItem( {
            id: props.id,
            name: props.name,
            amount:amount,
            price: props.price
        } );
    };





    return(
        <li className={styles.meal}>


            {/* In Meal Item Left Side */}
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>


            {/* Right Side */}
            <div>
                <MealItemForm 
                    id={props.id} 
                    onAddToCart={addToCartHandler}
                />
            </div>


        </li>
    );
}

export default MealItem;