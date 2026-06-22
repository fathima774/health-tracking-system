import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email.trim().toLowerCase() ===
          loginData.email.trim().toLowerCase() &&
        u.password === loginData.password
    );

    if (user) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert(`Welcome ${user.name}`);

      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>VitalSync</h2>
        <h3>Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "10px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;