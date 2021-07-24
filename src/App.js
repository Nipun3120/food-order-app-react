import React, {useState} from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const displayCartHandler= ()=> {
    setCartDisplay(true);
  };
  const hideCartHandler= ()=> {
    setCartDisplay(false);
  };

  return (
    <React.Fragment>
      {cartDisplay && <Cart onHideDisplay={hideCartHandler}/>}
      <Header onCartDisplay={displayCartHandler}/>
      <main>
        <Meals />  
      </main>      
    </React.Fragment>
  );
}

export default App;
