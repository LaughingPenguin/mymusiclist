import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/index.php/user/login", formData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Login successful", response);
          navigate("/reviews", { replace: true });
        }
      })
      .catch((error) => {
        console.error("Error submitting form data", error);
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
      </form>
    </div>
  );
}

export default Login;