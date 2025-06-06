// pages/SessionDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const SessionDetail = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSession = async () => {
      const res = await fetch(`http://localhost:5000/api/interview/${sessionId}/results`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();
      console.log("Session detail data:", data);
      setSession(data);
    };

    fetchSession();
  }, [sessionId]);

   const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleLogoClick = () => {
        navigate('/'); // Navigate to landing page
    };

    const handleDashboardClick = () => {
      navigate('/dashboard');
    }

  if (!session) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111418]"
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
              <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">AI Interview System</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <button className="text-[#111418] text-sm font-medium leading-normal" onClick={(handleDashboardClick)}>Dashboard</button>
              </div>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div className="text-[#111418]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                  </svg>
                </div>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6w7DLluJEqZO-I73R0UUoWV3q0nLNEWeis3E9TBcwcBdQdB4lwSqFpSUomDfb1XOQFLQ-pbdpYlIrpAm1SvlpsgVzhrVVEvnbFdr9QXwd3O6Y4HOI6hrWCtJLkN-yrbRWwmcha_Y5dXBbbMeGG1jEMc7AoOCsXOz436IyuwNtwdU1OG5ibHJ0ktWCKp7PvPKzBwVATBbZm6HUAdgvnxUj_ZZMKFebVafwREbe8AAWLUDgSfhdWta8fe4TR2EEP9y_3BDKL5EOw")' }}
              />
            </div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Loading session details...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <div class="flex items-center gap-4 text-[#111418] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <div class="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
              AI Interview System
            </h2>
          </div>
          <div class="flex items-center gap-8">
            <a class="text-white hover:underline text-sm font-medium leading-normal cursor-pointer hover:opacity-80 transition-opacity" onClick={(handleDashboardClick)}>Dashboard</a>
            <button
              onClick="{handleLogout}"
              class="flex max-w-96 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-gray-100 text-white gap-2 text-sm font-bold leading-normal tracking-wide min-w-0 px-2.5"
            >
              Logout
            </button>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Interview Details</p>
                <p className="text-[#637488] text-sm font-normal leading-normal">
                  Role: {session.role}, Date: {new Date(session.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            
            {session.answers.length === 0 ? (
              <div className="px-4 py-8">
                <p className="text-[#637488] text-base font-normal leading-normal">No answers recorded for this session.</p>
              </div>
            ) : (
              session.answers.map((ans, index) => (
                <div key={index}>
                  <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    Question {index + 1}
                  </h3>
                  <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    {ans.question}
                  </p>
                  
                  <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    Candidate's Answer
                  </h3>
                  <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    {ans.answer}
                  </p>
                  
                  <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    Evaluation
                  </h3>
                  <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    {ans.feedback}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>


    /* <div>
      <h2>Session Details</h2>
      <p><strong>Role:</strong> {session.role}</p>
      <p><strong>Created At:</strong> {new Date(session.createdAt).toLocaleString()}</p>

      {session.answers.length === 0 ? (
        <p>No answers recorded.</p>
      ) : (
        <ul>
          {session.answers.map((ans, index) => (
            <li key={index}>
              <strong>Q{index + 1}:</strong> {ans.question}<br />
              <strong>Answer:</strong> {ans.answer}<br />
              <strong>Feedback:</strong> {ans.feedback}<br />
            </li>
          ))}
        </ul>
      )}
    </div> */
  );
};

export default SessionDetail;
