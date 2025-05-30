import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { useAuthStore } from "../store/auth";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setToken = useAuthStore((state) => state.setToken);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/auth/signup", { email, password });
            setToken(response.data.token);
            navigate("/dashboard");
        } catch (error) {

            console.error("Signup failed:", error);
            if (error.response?.status === 409) {
                alert("User already exists, Please login.");
                navigate("/login");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSignup} 
                className="bg-white p-6 rounded shadow-md w-96">
                
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border rounded text-black placeholder-gray-500 bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border rounded text-black placeholder-gray-500 bg-white"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;