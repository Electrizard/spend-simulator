import "./StoreItem.css";
import {useState, useEffect} from 'react';

function StoreItem ({item}){

    const [buyAmount, setBuyAmount] = useState(1);

    function buyItem(){

    }

    return(
        <div className="item-container">
            <img src={item.image}></img>
            <h1>{item.name}</h1>
            <p>${item.price.toLocaleString()}</p>
            <div className="buy-manager">
                <button className="sell-button">Sell</button>
                <input onChange = {(e) => {if(e.target.value >= 1)setBuyAmount(e.target.value);}} type="number" className="buy-amount" value={buyAmount}></input>
                <button className="buy-button">Buy</button>
            </div>
            
        </div>
    );
}

export default StoreItem;