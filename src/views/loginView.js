import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import axios from "axios";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // handle input changes by updating formData when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/index.php/user/login", formData)
      .then((response) => {
        // if login is successful, extract authorization token from the response
        if (response.status === 200) {
          if (response.headers.authorization) {
            const authorizationHeader = response.headers.authorization;
            const [, token] = authorizationHeader.split('Bearer ');
            // store token in local storage for future authenticated requests
            localStorage.setItem("token", token);
          }
          toast.success("Login successful", {
            duration: 1500,
            position: 'top-right',
          });
          setTimeout(() => navigate("/reviews", { replace: true }), 1500);
        }
      })
      // handle authentication or user not found errors with route navigation
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("Incorrect credentials", error);
          toast.error("Incorrect credentials, please try again", {
            duration: 2000,
            position: 'top-right',
          });
        } else if (error.response.status === 404) {
          console.log("Account does not exist", error);
          toast.error("Account does not exist, please create an account", {
            duration: 1500,
            position: 'top-right',
          });
          setTimeout(() => navigate("/signup", { replace: true }), 1500);
        }
      });
  };
  return (
    <div className="text-center d-flex flex-column justify-content-center vh-100 bg-Platinum">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h1 mb-5">mymusiclist</h1>
        <h1 className="h3 mb-3">Please login</h1>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="btn btn-lg btn-primary border-0 mt-1" type="submit">
          Login
        </button>
        <p className="text-muted mt-4 pb-lg-2">Don't have an account? <Link to="/signup">Register here</Link></p>
      </form>
    </div>
  );
}

export default Login;