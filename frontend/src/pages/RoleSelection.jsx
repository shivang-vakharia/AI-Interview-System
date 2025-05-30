import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
    const [ role, setRole ] = useState('');
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        if (!role.trim()) {
            setError('Please enter a role to continue.');
            return;
        }

        setError('');
        navigate('/interview', { state: { role } });
    };

    return (
        <div>
            <h2>Enter the Role for Interview</h2>
            <input
                type="text"
                placeholder="Eg. Software Engineer, Data Scientist"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button onClick={handleStart}>Start Interview</button>
        </div>
    )
}

export default RoleSelection;