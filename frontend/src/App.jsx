import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import RoleSelection from './pages/RoleSelection';
import Interview from './pages/Interview';
import SessionDetail from './pages/SessionDetail';
import { useAuthStore } from './store/auth';


function App() {
  const token = useAuthStore((state) => state.token);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/start" element={token ? <RoleSelection /> : <Navigate to="/login" />} />
        <Route path="/interview" element={token ? <Interview /> : <Navigate to="/login" />} />
        <Route path="/session/:sessionId" element={token ? <SessionDetail /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App
