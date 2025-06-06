import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const Interview = () => {
  const { state } = useLocation();
  const role = state?.role;
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0); // start from 0
  const [recording, setRecording] = useState(false);
  const [evaluations, setEvaluations] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const sessionId = useAuthStore(state => state.sessionId);
  const setSessionId = useAuthStore((state) => state.setSessionId)

  const didFetch = useRef(false);

  // Fetch ALL questions ONCE when component mounts
  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    console.log("fetchQuestions called");
    try {
      const res = await fetch('http://localhost:5000/api/interview/start', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ role, numQuestions : 2 }),
      });

      if(!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to detch: ${res.status} - ${text}`);
      }

      const data = await res.json(); // { questions: [q1, q2, q3, ...] }
      console.log('Interview start response:', data);

      if (!data.sessionId) {
        console.warn('No sessionId in interview start response');
      } else {
        setSessionId(data.sessionId);  
      }

      setQuestions(data.questions);
    } catch (err) {
      console.error('Failed to fetch questions', err);
    }
  };

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    const localChunks = [];
    recorder.ondataavailable = (e) => localChunks.push(e.data);
    recorder.onstop = async () => {
      const blob = new Blob(localChunks, { type: 'audio/webm' });
      setChunks([]);
      await evaluateAnswer(blob);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setChunks(localChunks);
    setRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  const transcribeAudio = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob);

    const res = await fetch('http://localhost:5000/api/audio/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: formData,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Transcription failed: ${res.status} - ${text}`);
    }
    const data = await res.json();
    return data.transcript;
  };

  const evaluateAnswer = async (audioBlob) => {
    try{
      const transcript = await transcribeAudio(audioBlob);

      const res = await fetch('http://localhost:5000/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          question: questions[questionNumber],
          answer: transcript,
          sessionId: sessionId,
        }),
      })
   

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Evaluation failed: ${res.status} - ${text}`);
      }

      const data = await res.json();
      setEvaluations((prev) => [
        ...prev,
        {
          question: questions[questionNumber],
          answer: transcript,
          feedback: data.evaluation,
        },
      ]);
      
      if (questionNumber + 1 >= questions.length) {
        setIsComplete(true);
      } else {
        setQuestionNumber((prev => prev + 1));
      }
      
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111418]">
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
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {isComplete ? (
              // Results View - matches the first design file
              <>
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Interview Completed</p>
                    <p className="text-[#637488] text-sm font-normal leading-normal">Role: {role}, Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                
                {evaluations.map((evaluation, index) => (
                  <div key={index}>
                    <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Question {index + 1}</h3>
                    <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">{evaluation.question}</p>
                    
                    <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Candidate's Answer</h3>
                    <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">{evaluation.answer}</p>
                    
                    <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Evaluation</h3>
                    <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">{evaluation.feedback}</p>
                  </div>
                ))}
              </>
            ) : (
              // Question View - matches the second design file
              <>
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">Interview for {role}</p>
                </div>
                
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex gap-6 justify-between">
                    <p className="text-[#111418] text-base font-medium leading-normal">Question {questionNumber + 1} of {questions.length}</p>
                  </div>
                  <div className="rounded bg-[#dce0e5]">
                    <div 
                      className="h-2 rounded bg-[#111418]" 
                      style={{width: `${((questionNumber + 1) / questions.length) * 100}%`}}
                    />
                  </div>
                </div>
                
                <h1 className="text-[#111418] text-[12px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
                  {questions[questionNumber]}
                </h1>
                
                <div className="flex px-4 py-3 justify-between items-center">
                  <div className="flex gap-2">
                    {!recording ? (
                      <button
                        onClick={handleStartRecording}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#637488] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                      >
                        🎤 Record Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleStopRecording}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-500 text-white text-sm font-bold leading-normal tracking-[0.015em]"
                      >
                        ⏹️ Stop Recording
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>

    /* <div>
      <h2>Interview for: {role}</h2>
        {isComplete ? (
          <div>
            <h2>Interview Complete!</h2>
            <h3>Feedback:</h3>
            <ul>
              {evaluations.map((e, i) => (
                <li key={i}>
                  <strong>Question:{i + 1}:</strong> {e.question} <br />
                  <strong>Answer:{i + 1}:</strong> {e.answer} <br />
                  <strong strong>Evaluation:</strong> {e.feedback}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <h3>Question {questionNumber + 1} of {questions.length}</h3>
            <p>{questions[questionNumber]}</p>
            {!recording ? (
              <button onClick={handleStartRecording}>Start Answer</button>
            ) : (
              <button onClick={handleStopRecording}>Stop</button>
            )}
          </>
        )}
    </div> */
  );
};


export default Interview;