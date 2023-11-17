import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for Login styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setError(null); // Reset any previous errors

    // Basic validation checks
    if (!username || !password) {
      setError('Please enter both username and password.');
    } else if (username !== 'your-username' || password !== 'your-password') {
      setError('Invalid username or password. Please try again.');
    } else {
      console.log(`Logged in as ${username}`);
      // Add your login logic or redirection to a new page here
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>
      </form>
      <p>Don't have an account? <a href="/SignUp">Sign up</a></p>
    </div>
  );
}

export default Login;
