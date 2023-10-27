import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);

  const navigate = useNavigate();

  const handleChangePassword = () => {
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
    } else {
      setPasswordChanged(true);
      setError('');
    }
  };

  return (
    <div className="center-content">
        <div className="forgot-password-form">

      <h2>Forgot Password</h2>
      {passwordChanged ? (
        <div>
          <p>Password changed successfully. You can now <button onClick={() => navigate('/login')}>Login</button></p>
        </div>
      ) : (
        <div>
          <input
            type="username"
            placeholder="Username"
            value={email}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleChangePassword}>Change Password</button>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={() => navigate('/login')}>Back to Login</button>
        </div>
      )}
    </div>
    </div>

  );
};

export default ForgotPassword;
