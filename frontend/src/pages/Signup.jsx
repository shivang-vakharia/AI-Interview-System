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

        <div>
            <form 
                onSubmit={handleSignup} >
                
                <h2>Sign Up</h2>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;