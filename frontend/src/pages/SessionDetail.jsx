// pages/SessionDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SessionDetail = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);

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

  if (!session) {
    return <div>Loading session details...</div>
  }

  return (
    <div>
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
    </div>
  );
};

export default SessionDetail;
