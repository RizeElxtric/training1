import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);

  const navigate = useNavigate();

  const handleChangePassword = () => {
    // Implement password change logic (e.g., update it in your database)
    // You can add more robust password validation if needed

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
    } else {
      // Password is valid, and it's changed successfully
      setPasswordChanged(true);
      setError('');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {passwordChanged ? (
        <div>
          <p>Password changed successfully. You can now <button onClick={() => navigate('/login')}>Login</button></p>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
  );
};

export default ForgotPassword;
