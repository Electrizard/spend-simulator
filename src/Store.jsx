import StoreItem from "./StoreItem.jsx";
import "./Store.css";
import items from "./data/items.js";

function Store(){
    return(
        <div className="store-item-div">
            <StoreItem name={items[0].name} price={items[0].price}image={items[0].image}/>
        </div>
        
    )
}

export default Store;