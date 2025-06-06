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

     const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
        setError('');
     }

    const suggestedRoles = [
        'Software Engineer',
        'Data Scientist',
        'Product Manager',
        'UX Designer',
        'DevOps Engineer',
        'Machine Learning Engineer',
        'Full Stack Developer',
        'Frontend Developer',
        'Backend Developer',
        'Cloud Architect'
    ]

    const handleLogoClick = () => {
        navigate('/'); // Navigate to landing page
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f2f4] px-10 py-3">
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
                        <h2 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em]">AI Interview System</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f1f2f4] text-[#121416] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <div className="text-white ">
                                Logout
                            </div>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#121416] tracking-light text-[32px] font-bold leading-tight min-w-72">
                                What role are you interviewing for?
                            </p>
                        </div>

                        {/* Search Input */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <input
                                    placeholder="Enter a Role"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border border-[#dde0e3] bg-white focus:border-[#dde0e3] h-14 placeholder:text-[#6a7581] p-[15px] text-base font-normal leading-normal"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </label>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="px-4 py-2">
                                <p className="text-red-500 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Suggested Roles */}
                        <h3 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Suggested roles
                        </h3>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                            {suggestedRoles.map((suggestedRole, index) => (
                                <div
                                    key={index}
                                    className="flex flex-1 gap-3 rounded-lg border border-[#dde0e3] bg-white p-4 items-center cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => handleRoleSelect(suggestedRole)}
                                >
                                    <div className="text-[#121416]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[#121416] text-base font-bold leading-tight">{suggestedRole}</h2>
                                </div>
                            ))}
                        </div>

                        {/* Continue Button */}
                        <div className="flex px-4 py-3 justify-end">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#b2cae5] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#a5c2e0] transition-colors"
                                onClick={handleStart}
                            >
                                <span className="truncate">Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleSelection;