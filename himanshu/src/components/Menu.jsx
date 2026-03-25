import foodItems from "../data/foodData"
import {useNavigate} from "react-router-dom";
function Menu({ cart, setCart }) {
const navigate = useNavigate();
  const addToCart = (item) => {
    const exist = cart.find((x) => x.id === item.id)

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...x, qty: x.qty + 1 } : x
        )
      )
    } else {
      setCart([...cart, { ...item, qty: 1 }])
    }
  }

  return (
    <div className="p-10 grid md:grid-cols-3 gap-6">
      {foodItems.map((item) => (
        // <div key={item.id} className="shadow-lg p-4 rounded-xl">
        <div
        key={item.id}
        onClick={() => navigate(`/category/${item.name}`)}
        className="shadow-1g p-4 rounded-xl cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="rounded-lg mb-3"
          />
          <h3 className="font-bold">{item.name}</h3>
          <p>₹{item.price}</p>

          <button
            onClick={() => addToCart(item)}
            className="bg-orange-500 text-white px-4 py-1 mt-2 rounded"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  )
}

export default Menu