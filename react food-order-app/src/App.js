import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import React,{useState} from "react";
import CartProvider from "./context/cart-provider";




function App() {



  // Cart = Backdrop Close Button (Require State)
  const [cartIsShown, setCartIsShown ] = useState(false);



  // Function For Which Cart/Backdrop is Shown
  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  // Function For Which Cart/Backdrop is Hide
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }





  return (



    // As Context Needed So CartProvider
    <CartProvider>



      {/* Dropdown */}
      {/* If True Then <Cart> Shown */}

      { cartIsShown && <Cart onGoesToCart={hideCartHandler}/> }
      {/* Close Button & Backdrop Inside Cart : Close Cart*/}
      {/* Cart Needs Context */}




      {/* First Navbar & Image */}
      {/* App:Header:HeaderCartButton:Button(Open The Cart) */}
      {/* Connect Top To Bottom */}

      <Header onGoesToHederCartButton={showCartHandler}/>
      {/* In Header HeaderCartButton Needs Context for Update Badge */}





      {/* After Image Black where some info & White Section where Meals are Listed */}
      <main>
        <Meals/>
        {/* Meals Needs Context to Add Items*/}
      </main>



    </CartProvider>
    
  );
}

export default App;
