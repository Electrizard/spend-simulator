import "./StoreItem.css";
import {useState, useEffect} from 'react';

function StoreItem ({name, price, image}){

    const [buyAmount, setBuyAmount] = useState(1);


    return(
        <div className="item-container">
            <img src={image}></img>
            <h1>{name}</h1>
            <p>${price.toLocaleString()}</p>
            <div className="buy-manager">
                <button className="sell-button">Sell</button>
                <input onChange = {(e) => {if(e.target.value >= 1)setBuyAmount(e.target.value);}} type="number" className="buy-amount" value={buyAmount}></input>
                <button className="buy-button">Buy</button>
            </div>
            
        </div>
    );
}

export default StoreItem;