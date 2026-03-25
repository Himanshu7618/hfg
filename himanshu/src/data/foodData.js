import pizza from "../assets/pizza.jpg";
import pizza1 from "../assets/pizza1.jpg";
import pizza2 from "../assets/pizza2.jpg";
import pizza3 from "../assets/pizza3.jpg";
import pasta from "../assets/pasta.jpg";
import pasta1 from "../assets/pasta1.jpg";
import pasta2 from "../assets/pasta2.jpg";
import burger from "../assets/burger.jpg";
import burger1 from "../assets/burger1.jpg";
import burger2 from "../assets/burger2.jpg";
const foodItems = [
    { 
        id: 1,
         name: "Pizza",
         image:pizza,
         items:[
            { id: 1, name:"Cheese Pizza", price: 199, image: pizza1},
            { id: 2, name: "Veggie Pizza", price:249, image: pizza2},
            { id: 3, name: "Paneer Pizza", price: 299, image:pizza3},
         ] ,
        
    },
    {
         id: 2,
          name: "Burger",
           image:burger,
          items: [
            {id: 1, name:"Aloo Burger", price:99, image: burger1},
            {id: 2, name:"Cheese Burger", price:149, image: burger2},      ]
       
        },
    { 
        id: 3,
         name: "Pasta",
        image:pasta,
        items: [
            { id: 1, name:"White Pasta", price:149, image: pasta1},
             { id: 2, name:"Red Pasta", price:159, image: pasta2},
        ],
        },
];
export default foodItems;