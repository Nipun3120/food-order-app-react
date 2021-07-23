import React from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />  
      </main>      
    </React.Fragment>
  );
}

export default App;
