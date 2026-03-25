import { Link } from "react-router-dom";
import { useState } from "react";
import{ShoppingCart, MapPin, Search} from "lucide-react";
function Navbar({cartCount}) {
    const[location, setLocation]=useState("Delhi");
    return(
        <nav className="flex justify-between px-6 py-4 shadow-md">
            <Link to="/" className="text-2xl font-bold text-orange-500">
            Foodie
            </Link>
            <div className="flex items-center border rounded-lg px-3 py-2 w-[45%] gap-2">
                <div className="flex items-center gap-4">
                    <MapPin size={18} className="text-orange-500" />
                    <select
                    className="outline-none bg-transparent"
                    value={location}
                    // onChange={(e) => setLocation(e.target.value)}
                    
                    >
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Punjab">Punjab</option>
                    </select>
                </div>
                <div className="h-5 w-1px bg-gray-400"></div>
                <div className="flex items-center w-full gap-2">
                    <Search size={18} className="text-gray-500" />
                    <input
                    placeholder="Search food or reataurant..."
                    className="w-full outline-none"
                    />
                </div>
            </div>
            {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-1g hover:bg-blue-800">
                Login
            </button> */}
            <Link to="/Login">
            Login
            </Link>
            {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-1g hover:bg-orange-800">
                Sign Up
            </button> */}
            <Link to="/Signup" className="bg-orange-500 text-white px-4 py-2 rounded-1g hover:bg-orange-600">
            Sign Up
            </Link>
            <Link to="/cart">
            Cart ({cartCount})
            </Link>
            </nav>
    )
}
export default Navbar;