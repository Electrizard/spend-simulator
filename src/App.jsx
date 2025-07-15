import {Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import {CashContext} from "./contexts/CashContext.jsx";
import {CartContext} from './contexts/CartContext.jsx';
import CashDisplay from "./CashDisplay.jsx";
import Store from "./Store.jsx";
import Checkout from "./Checkout.jsx";

function App() {
  const [cash, setCash] = useState(10000000);
  const [cart, setCart] = useState([]);
  return (
    <CashContext.Provider value={{ cash, setCash }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<><CashDisplay/> <Store /></>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContext.Provider>
    </CashContext.Provider>
  );
}

export default App
