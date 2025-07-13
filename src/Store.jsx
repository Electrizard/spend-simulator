import StoreItem from "./StoreItem.jsx";
import "./Store.css";
function Store(){
    return(
        <div className="store-item-div">
            <StoreItem name="Dog" price={250}imageUrl="https://media.discordapp.net/attachments/1384224175886958592/1393803255607459840/Dog-PNG-Picture.png?ex=68747fef&is=68732e6f&hm=7bf4defdec37d42970d3144c1c30db4ce075826b698bbda3951d0baf6179d565&=&format=webp&quality=lossless&width=1047&height=1321"/>
        </div>
        
    )
}

export default Store;