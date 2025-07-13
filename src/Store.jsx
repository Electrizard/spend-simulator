import StoreItem from "./StoreItem.jsx";
import "./Store.css";
import items from "./data/items.js";

function Store(){
    return(
        <div className="store-item-div">
            <StoreItem item={items[0]}/>
            <StoreItem item={items[1]}/>
        </div>
        
    )
}

export default Store;