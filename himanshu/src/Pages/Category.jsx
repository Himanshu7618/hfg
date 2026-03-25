import { useParams } from "react-router-dom";
import foodItems from "../data/foodData";

function Category() {
  const { name } = useParams();

  const category = foodItems.find(
    (item) => item.name === name
  );

  return (
    <div className="p-10 grid md:grid-cols-3 gap-6">
      {category.items.map((item) => (
        <div key={item.id} className="shadow-lg p-4 rounded-xl">
          
          <img
            src={item.image}
            className="rounded-lg mb-3 w-full h-40 object-cover"
          />

          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

        </div>
      ))}
    </div>
  );
}

export default Category;