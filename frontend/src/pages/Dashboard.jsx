import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const Dashboard = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to AI Interview System</h1>
            <p>Logged in as: <strong>{user?.email}</strong></p>

            <div>
                <button onClick={() => navigate('/start')}>
                    Start Interview
                </button>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
        
    )
}

export default Dashboard;