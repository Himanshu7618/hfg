import React from "react";
function Login() {
    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-350px">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 mb-4 rounded"
                />
                <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-4 rounded"
                />
                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;