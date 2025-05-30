import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

  const sessionId = useAuthStore(state => state.sessionId);
  const setSessionId = useAuthStore((state) => state.setSessionId)

  // Fetch ALL questions ONCE when component mounts
  useEffect(() => {
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
    <div>
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
    </div>
  );
};


export default Interview;