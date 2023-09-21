import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { signIn } from "../components/auth/SignIn";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    if (username && password) {
      const response = signIn(username, password);
      // Set user as logged in
      if (response && response.success) {
        localStorage.setItem("isLoggedIn", response.success.toString());
        navigate("/welcome");
      } else {
        localStorage.setItem("isLoggedIn", response.success.toString());
      }
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
