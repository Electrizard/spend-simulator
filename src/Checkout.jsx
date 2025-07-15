import {useContext} from "react";
import Receipt from "./Receipt.jsx";
import {CashContext} from './contexts/CashContext.jsx'; 
import "./Checkout.css";

function Checkout(){
    const {cash} = useContext(CashContext);    
    return(
        <div>
            <h1>You checked out!</h1>
            <Receipt/>
            <h1 className="extra-money">You have ${cash.toLocaleString()} left</h1>
        </div>
    );
}

export default Checkout;