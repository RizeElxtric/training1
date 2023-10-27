import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password || !reenterPassword || !dob || !phoneNumber || !email) {
      setError('Please fill in all fields');
    } else if (password !== reenterPassword) {
      setError('Passwords do not match');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="center-content">
          <div className="register-form">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Reenter Password"
        value={reenterPassword}
        onChange={(e) => setReenterPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date of Birth"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p style={{ color: 'red' }}>{error}</p>
      <button onClick={() => navigate('/login')}>Back to Login</button>
    </div>
    </div>

  );
};

export default Register;
