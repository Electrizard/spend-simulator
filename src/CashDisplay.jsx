import {useContext} from 'react';
import {CashContext} from './CashContext.jsx';

function CashDisplay(){
    const {cash} = useContext(CashContext);

    return (
        <div className="cash-container">
            <h1>${cash.toLocaleString()}</h1>
        </div>
    );
}

export default CashDisplay