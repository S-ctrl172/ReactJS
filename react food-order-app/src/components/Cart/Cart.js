
//React Portal
import Modal from '../UI/Modal';

import styles from './Cart.module.css';

import React, { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';

import CartItem from './CartItem';
import Checkout from './Checkout';




const Cart = (props) =>{


    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);


    const totalAmount = `$${ cartCtx.totalAmount.toFixed(2) }`;


    const hasItems =  cartCtx.items.length > 0;


    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = item =>{
        cartCtx.addItem( {...item, amount: 1} ); 
    }; 
    const orderHandler = () =>{
        setIsCheckout(true);
    };
    const submitOrderHandler = async (userData) =>{

        setIsSubmiting(true);

        await fetch('https://react-http-3d61e-default-rtdb.firebaseio.com/orders.json', {

            method:'post',
            body:JSON.stringify( {
                user: userData,
                orderedItems:cartCtx.items
            } )  
        } );

        setIsSubmiting(false);
        setDidSubmit(true);

        cartCtx.clearCart();
    };




    const cartItems = 
    <ul className={styles['cart-items']}>
    { cartCtx.items.map( (item) => (
        <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount}
            price={item.price}
            onRemove={ cartItemRemoveHandler.bind(null, item.id) }
            onAdd={ cartItemAddHandler.bind(null, item) }
        />
        ) )
    }
    </ul>;



    const cartModalContent = 
        
        <React.Fragment>

            {cartItems}

            <div className={styles.total}>

                <span>Total Amount</span>
                <span>{totalAmount}</span>

            </div>

            { isCheckout && <Checkout 
                // Just Pass To CheckOut
                onConfirm={submitOrderHandler}
                onCancel={props.onGoesToCart}/>
            }

            { !isCheckout && 
            
                <div className={styles.actions}>

                    <button className={ styles['button--alt'] }
                        onClick={props.onGoesToCart}> 
                        {/* Clicking Close Backdrop */}
                        Close 
                    </button>

                    {hasItems && <button className={styles.button}
                        onClick={orderHandler}> 
                        Order 
                    </button>}

                </div>
            }

    </React.Fragment>


    const isSubmitingModalContent = <p>Sending Order data...</p>;

    const didSubmitModalContent = 
    <React.Fragment>

        <p>Successfully Sent the order!</p>

        <div className={styles.actions}>
            <button className={styles.button}
                onClick={props.onGoesToCart}>     
                    Close 
            </button>
        </div>
    </React.Fragment>
    


    return (

        <Modal onGoesToModal={props.onGoesToCart}>
            {!isSubmiting && !didSubmit&& cartModalContent}
            {isSubmiting && isSubmitingModalContent}
            {!isSubmiting && didSubmit && didSubmitModalContent}
        </Modal>

    );
}

export default Cart;