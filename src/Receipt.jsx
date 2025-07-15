import "./Receipt.css";
import {useContext} from 'react';
import {CartContext} from './contexts/CartContext.jsx';
function Receipt(){
    const {cart} = useContext(CartContext);
    

    return(
        <div className="receipt-container">
            <h1>Receipt: </h1>
            {cart.map((cartItem) => {
                return(<p>{cartItem.item.name}: ${cartItem.item.price.toLocaleString()} - x{cartItem.quantity}</p>)
            })}
            <hr></hr>
            <h2>Total: ${cart.reduce((sum, cartItem) => (sum + cartItem.item.price * cartItem.quantity), 0).toLocaleString()}</h2>
        </div>
    );
}  

export default Receipt;