import {useContext} from 'react';
import {CashContext} from './contexts/CashContext.jsx'; 
import "./CashDisplay.css";



function CashDisplay(){
    const {cash} = useContext(CashContext);

    return (
        <div className="cash-container">
            <h1>${cash.toLocaleString()}</h1>
        </div>
    );
}

export default CashDisplay