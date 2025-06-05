import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { useSessionsStore } from '../store/sessionStore';

const Dashboard = () => {
    const { user, logout } = useAuthStore();
    const { sessions, setSessions } = useSessionsStore();
    const navigate = useNavigate();

    const fetchCalled = useRef(false);

    console.log('Dashboard render - Sessions', sessions);
    console.log('Sessions length:', sessions?.length);
    console.log('Sessions type:', typeof sessions);

    useEffect(() => {
        if (fetchCalled.current) return;
        fetchCalled.current = true;

        const fetchSessions = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/interview/sessions', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status} - ${await res.text()}`);
                }

                const data = await res.json();
                console.log('API Response:', data);

                if (data.sessions) {
                    setSessions(data.sessions);
                } else if (Array.isArray(data)) {
                    setSessions(data);
                } else {
                    console.error('Unexpected response format:', data);
                    setSessions([]); // Reset sessions if format is unexpected
                }
                
            } catch (err) {
            console.error('Failed to fetch sessions:', err);
            setSessions([]); // Reset sessions on error
            }
        };
        fetchSessions();
    }, [setSessions]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleViewSession = (sessionId) => {
        navigate(`/session/${sessionId}`);
    };

    const handleLogoClick = () => {
        navigate('/'); // Navigate to landing page
    };

    return (
        
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-10 py-3">
                    <div className="flex items-center gap-4 text-[#111418] cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={handleLogoClick}>
                        <div className="size-4">
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
                        <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-tight">AI Interview System</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <button
                            onClick={handleLogout} 
                            className="flex max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-gray-100 text-white gap-2 text-sm font-bold leading-normal tracking-wide min-w-0 px-2.5">
                            Logout
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-4xl flex-1">
                        {/* Page Header */}
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-gray-900 tracking-tight text-3xl font-bold leading-tight min-w-72">Welcome to the Dashboard!</p>
                            <button
                                className="flex min-w-21 max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-gray-100 text-white text-sm font-medium leading-normal hover:bg-gray-200 transition-colors"
                                onClick={() => navigate('/start')}
                            >
                                <span className="truncate">New Interview</span>
                            </button>
                        </div>

                        {/* Welcome Message */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <h2 className="text-blue-900 text-lg font-semibold mb-2">Welcome back!</h2>
                            <p className="text-blue-800">Logged in as: <strong>{user?.email}</strong></p>
                        </div>

                        {/* Sessions List */}
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                <h3 className="text-gray-900 text-lg font-semibold">Your Previous Sessions</h3>
                            </div>
                            
                            {!sessions || sessions.length === 0 ? (
                                <div className="p-8 text-center">
                                    <div className="text-gray-400 mb-4">
                                        <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 text-lg">No interviews yet</p>
                                    <p className="text-gray-400 text-sm mt-2">Start your first interview to see it here</p>
                                    <button
                                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                                        onClick={() => navigate('/start')}
                                    >
                                        Start Your First Interview
                                    </button>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-200">
                                    {sessions.map(session => (
                                        <div key={session._id} className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between hover:bg-gray-50 transition-colors">
                                            <div className="flex-1">
                                                <p className="text-gray-900 text-base font-normal leading-normal truncate">
                                                    {session.role}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="shrink-0">
                                                    <p className="text-gray-600 text-sm font-normal leading-normal">
                                                        {new Date(session.createdAt).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                                <button
                                                    className="flex items-center justify-center rounded-md h-8 px-3 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                                                    onClick={() => handleViewSession(session._id)}
                                                >
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                                <h3 className="text-lg font-semibold mb-2">Ready for your next interview?</h3>
                                <p className="text-blue-100 mb-4">Practice with AI-powered mock interviews</p>
                                <button
                                    className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors"
                                    onClick={() => navigate('/start')}
                                >
                                    Start Now
                                </button>
                            </div>
                            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                                <h3 className="text-lg font-semibold mb-2">Track Your Progress</h3>
                                <p className="text-green-100 mb-4">Review your past performances and improve</p>
                                <button className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
                                    View Analytics
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       /* <div>
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
        </div>   */
    );
};

export default Dashboard;