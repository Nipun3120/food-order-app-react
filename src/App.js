import React, {useState} from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from './store/CartProvider';

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const displayCartHandler= ()=> {
    setCartDisplay(true);
  };
  const hideCartHandler= ()=> {
    setCartDisplay(false);
  };

  return (
    <CartProvider>
      {cartDisplay && <Cart onHideDisplay={hideCartHandler}/>}
      <Header onCartDisplay={displayCartHandler}/>
      <main>
        <Meals />  
      </main>      
    </CartProvider>
  );
}

export default App;
