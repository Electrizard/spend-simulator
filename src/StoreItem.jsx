import "./StoreItem.css";
import {useState, useContext, useEffect} from 'react';
import {CashContext} from './contexts/CashContext.jsx'; 
import {CartContext} from './contexts/CartContext.jsx';

function StoreItem ({item}){
    const {cash, setCash } = useContext(CashContext);
    const {cart, setCart} = useContext(CartContext);
    const [buyAmount, setBuyAmount] = useState(1);

    function buyItem(){
        if(cash >= item.price * buyAmount){
            setCash(cash - item.price * buyAmount);

            const cartItemIndex = cart.findIndex((e) => e.item.id===item.id);
            if(cartItemIndex != -1){
                const newCart = [...cart]
                newCart[cartItemIndex] = {
                    ...newCart[cartItemIndex],
                    quantity: newCart[cartItemIndex].quantity + buyAmount
                }
                setCart(newCart);
            }
            else{
                setCart([...cart, {item: item, quantity: buyAmount,}]);
            }
            
        }
    }


    useEffect(() => {
        console.log("Cart updated:", cart);
    }, [cart]);

    return(
        <div className="item-container">
            <img src={item.image}></img>
            <h1>{item.name}</h1>
            <p>${item.price.toLocaleString()}</p>
            <div className="buy-manager">
                <button className="sell-button">Sell</button>
                <input onChange = {(e) => {if(e.target.value >= 0 && Number.isInteger(Number(e.target.value)))setBuyAmount(Number(e.target.value));}} 
                type="number" className="buy-amount" value={buyAmount == 0 ? "" : buyAmount}></input>
                <button onClick={buyItem} className="buy-button">Buy</button>
            </div>
            
        </div>
    );
}

export default StoreItem;