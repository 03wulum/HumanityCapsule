import React, { useState } from "react";
import "../styles/LoginPage.css";

export default function LoginPage({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (username === "admin" && password === "password") {
      // Set user as logged in
      localStorage.setItem("isLoggedIn", "true");
      // Redirect to the welcome page
      history.push("/welcome");
    } else {
      alert("Invalid username or password");
      localStorage.setItem("isLoggedIn", "false");
    }
  };

  return (
    <div className="outer-container">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
