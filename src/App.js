import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const closeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <div>
      <CartProvider>
        {showCart && <Cart closeCart={closeCartHandler} />}

        <Header setShowCart={setShowCart} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
