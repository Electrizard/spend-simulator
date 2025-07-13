import { useState } from 'react'
import {CashContext} from "./contexts/CashContext.jsx";
import {CartContext} from './contexts/CartContext.jsx';
import CashDisplay from "./CashDisplay.jsx";
import Store from "./Store.jsx";
function App() {
  const [cash, setCash] = useState(1000000);
  const [cart, setCart] = useState([]);
  return(
    <CashContext.Provider value={{cash, setCash}}>
      <CartContext.Provider value={{cart, setCart}}>
        <CashDisplay/>
        <Store/>
      </CartContext.Provider>
    </CashContext.Provider>
  );
}

export default App
