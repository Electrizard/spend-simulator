import StoreItem from "./StoreItem.jsx";
import "./Store.css";
import items from "./data/items.js";

function Store(){
    return(
        <>
            <div className="store-item-div">
                {items.map((item) => (
                    <StoreItem key={item.id} item={item}/>
                ))}
            </div>
            <button className="checkout-button">Checkout</button>
        </>
    )
}

export default Store;