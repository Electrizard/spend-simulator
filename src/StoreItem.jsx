import "./StoreItem.css";
function StoreItem ({name, price, imageUrl}){


    return(
        <div className="item-container">
            <img src={imageUrl}></img>
            <h1>{name}</h1>
            <p>${price.toLocaleString()}</p>
            <div className="buy-manager">
                <button className="sell-button">Sell</button>
                <input className="buy-amount" value={1}></input>
                <button className="buy-button">Buy</button>
            </div>
            
        </div>
    );
}

export default StoreItem;