import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';


import React,{useContext, useEffect, useState} from 'react';
import CartContext from '../../context/cart-context';



const HeaderCartButton = (props) =>{

    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

    const HCBctx = useContext(CartContext);

    const { items } = HCBctx;

    

    // reduce : array into Single value ( function, starting value )
    const numberOfCartItem = items.reduce( (currentNumber, item ) =>{ 
            return currentNumber + item.amount;
        } , 0 //Starting Value
    );


    

    const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : '' }`;

    useEffect( () => {
        if(HCBctx.items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout( () => {
            setBtnIsHighLighted(false);
        }, 300 );

        return () =>{
            clearTimeout(timer);
        };

    } ,[items,HCBctx] 
    );


    return(


        // In Navbar Right Most Component
        // Comes from HeaderCartButton to Actual Button: Shows the Cart
        <button className={btnClasses} onClick={props.onGoesToButton}>

            {/* Cart Icon Import From Cart Section */}
            <span className={styles.icon}>
                <CartIcon/>
            </span>

            {/* Text  */}
            <span>Your Cart</span>

            {/* No of Cart Items */}
            <span className={styles.badge}> {numberOfCartItem} </span>

        </button>

    );

}


export default HeaderCartButton;