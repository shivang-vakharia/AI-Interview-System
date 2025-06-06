import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { useAuthStore } from "../store/auth";
import { signInWithPopup, auth, provider } from '../firebase';

function Signup() {

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const idToken = await result.user.getIdToken();
            //console.log('Google ID Token:', idToken); 

            const res = await api.post('/auth/google', { idToken });

            setToken(res.data.token, res.data.user);
            navigate('/dashboard');

        } catch (error) {
            console.error('Google login failed:', error);
            alert('Google login failed. Please try again.');
        }
    };
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Added missing state
    const setToken = useAuthStore((state) => state.setToken);
    const navigate = useNavigate();

    

    const handleSignup = async (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        
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

    // Added missing Google signup handler
    

    return (
        <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-['Inter','Noto Sans',sans-serif]">
            <div className="flex flex-col h-full">
                {/* Header */}
                <header className="flex items-center justify-between border-b border-[#f0f2f4] px-4 md:px-10 py-3">
                    <div className="flex items-center gap-4 text-[#111418] cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => navigate("/")}>
                        {/* Logo */}
                        <div className="w-4 h-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold">AI Interview System</h2>
                    </div>

                    <div className="flex gap-2">
                        <button 
                            onClick={() => navigate("/login")}
                            className="h-10 px-4 rounded-lg bg-[#f0f2f4] text-white text-sm font-bold hover:bg-[#e1e5e9]"
                        >
                            Log in
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex justify-center items-center flex-1 px-4 py-10">
                    <div className="flex flex-col w-full max-w-[512px] space-y-4">
                        <h2 className="text-center text-[28px] font-bold text-[#111418] pb-2">
                            Create your account
                        </h2>

                        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
                            {/* Email Field */}
                            <div className="flex flex-col px-2">
                                <label className="text-base font-medium text-[#111418] pb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-14 rounded-lg border border-[#dce0e5] bg-white p-[15px] text-base text-[#111418] placeholder-[#637488] focus:outline-none focus:border-[#1978e5]"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col px-2">
                                <label className="text-base font-medium text-[#111418] pb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="h-14 rounded-lg border border-[#dce0e5] bg-white p-[15px] text-base text-[#111418] placeholder-[#637488] focus:outline-none focus:border-[#1978e5]"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Confirm Password Field */}
                            <div className="flex flex-col px-2">
                                <label className="text-base font-medium text-[#111418] pb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm your password"
                                    className="h-14 rounded-lg border border-[#dce0e5] bg-white p-[15px] text-base text-[#111418] placeholder-[#637488] focus:outline-none focus:border-[#1978e5]"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Sign Up Button */}
                            <div className="px-2">
                                <button
                                    type="submit"
                                    className="w-full h-12 rounded-lg bg-[#1978e5] text-white text-base font-bold hover:bg-[#1565c0] transition-colors"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>

                        {/* Google Signup Button */}
                        <div className="px-2">
                            <button
                                type="button"
                                onClick={handleGoogleSignup}
                                className="w-full h-12 rounded-lg border border-[#dce0e5] bg-white text-white text-base font-medium hover:bg-[#f8f9fa] transition-colors flex items-center justify-center gap-3"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span>Continue with Google</span>
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="px-2 text-center text-sm text-[#637488]">
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="underline cursor-pointer hover:text-[#111418]"
                            >
                                Log in
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;