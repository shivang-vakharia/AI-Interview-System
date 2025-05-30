import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useAuthStore } from '../store/auth';
import { signInWithPopup, auth, provider } from '../firebase';

function Login() {

    const handleGoogleLogin = async () => {
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
    }



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setToken = useAuthStore((state) => state.setToken);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { email, password });
            setToken(res.data.token, res.data.user);
            navigate('/dashboard');

        } catch (error) {
            console.error('Login failed:', error);

            if (error.response?.data?.error) {
                alert(`Login failed: ${error.response.data.error}`);
            } else {
                alert('Login failed. Please check your credentials and try again.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleLogin} 
                className="bg-white p-6 rounded shadow-md w-96">
                
                <h2 className="text-2xl font-bold mb-4">Login</h2>
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
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
                <button 
                    type="button" 
                    onClick={handleGoogleLogin} 
                    className="w-full bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600">
                    Login with Google</button>
            </form>
        </div>
    )
}

export default Login;