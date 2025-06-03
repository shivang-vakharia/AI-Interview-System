import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { useSessionsStore } from '../store/sessionStore';

const Dashboard = () => {
    const { user, logout } = useAuthStore();
    const { sessions, setSessions } = useSessionsStore();
    const navigate = useNavigate();

const fetchCalled = useRef(false);

    useEffect(() => {
        if (fetchCalled.current) return;
        fetchCalled.current = true;
        const fetchSessions = async () => {
            const res = await fetch('http://localhost:5000/api/interview/sessions', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await res.json();
            setSessions(data.sessions);
        };
        fetchSessions();
    }, []);

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

                <h2>Your Previous Sessions</h2>
                <ul>
                    {sessions.map(session => (
                        <li key={session._id}>
                            <button onClick={() => navigate(`/session/${session._id}`)}>
                                {session.role} - {new Date(session.createdAt).toLocaleString()}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>   
    );
};

export default Dashboard;