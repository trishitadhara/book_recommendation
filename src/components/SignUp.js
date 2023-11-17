import React, { useState } from "react";
import "./Login.css"; // Import Login.css for shared styles

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = () => {
    setError(null); // Reset any previous errors

    // Basic validation checks
    if (!username || !password || !email) {
      setError("Please fill out all fields.");
    } else {
      // Add your sign-up logic here
      console.log(`Signed up with username: ${username}, email: ${email}`);
      // You can add additional logic, such as API calls, here
    }
  };

  return (
    <div className="login-container signup-container">
      {" "}
      {/* Apply shared styles */}
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSignup}
          className="login-button signup-button"
        >
          {" "}
          {/* Apply shared button styles */}
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
