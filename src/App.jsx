import { useState } from 'react'
import {CashContext} from "./CashContext.jsx";
import CashDisplay from "./CashDisplay.jsx";
import Store from "./Store.jsx";
function App() {
  const [cash, setCash] = useState(1000000);
  return(
    <CashContext.Provider value={{cash, setCash}}>
      <CashDisplay/>
      <Store/>
    </CashContext.Provider>
  );
}

export default App
