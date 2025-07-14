import { useNavigate } from 'react-router-dom';
import StoreItem from "./StoreItem.jsx";
import "./Store.css";
import items from "./data/items.js";

function Store(){
    const navigate = useNavigate();

    function handleNavigate(){
        navigate('./checkout')
    }
    return(
        <>
            <div className="store-item-div">
                {items.map((item) => (
                    <StoreItem key={item.id} item={item}/>
                ))}
            </div>
            <button onClick={handleNavigate} className="checkout-button">Checkout</button>
        </>
    )
}

export default Store;