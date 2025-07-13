import valorantImage from "../assets/images/valorant.png";
import dogImage from "../assets/images/dog.png";
import xboxImage from "../assets/images/xbox.png";
import yachtPng from "../assets/images/yacht.png";

const rawItems = [
    
    {
        
        name: "Dog",
        price: 250,
        image: dogImage,
    },
    {
        
        name: "Xbox Series X",
        price: 600,
        image: xboxImage,
    },

    {   
        name: "1000 Valorant VP",
        price: 10,
        image: valorantImage,
    },

    {
        name: "Cruiser Yacht",
        price: 1500000,
        image: yachtPng,
    }
    

]

const items = rawItems.sort((a, b) => a.price - b.price).map((item, index) => ({
    ...item, 
    id: index + 1,

}));


export default items;