import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './signup.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.cpassword) {
            console.log("Password and Confirm Password must match");
            toast.error("Password and Confirm Password must match", {
            duration: 2000,
            position: "top-right",
        });
        } else {
            axios.post('http://localhost:8080/index.php/user/signup', formData)
            .then((response) => {
                if (response.status === 201) {
                    console.log("Account created", response);
                    toast.success("Account created", {
                        duration: 1500,
                        position: 'top-right',
                    });
                    setTimeout(() => navigate("/login", { replace: true }), 1500);
                }
            })
            .catch((error) => {
                if (error.response.status === 409) {
                    console.log("Account already exists", error);
                    toast.error("Username or account already exists", {
                        duration: 2000,
                        position: 'top-right',
                    });
                }
            });
        }
    };
    return (
        <div className="text-center d-flex flex-column justify-content-center vh-100 bg-Platinum">
            <form className="form-signup" onSubmit={handleSubmit}>
            <h1 className="h1 mb-5">mymusiclist</h1>
            <h1 className="h3 mb-3">Register for an account</h1>
            <input
                type="username"
                name="username"
                className="form-control"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                minLength="3"
                maxLength="20"
                autoFocus
                required
            />
            <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                minLength="10"
                maxLength="25"
                required
            />
            <input
                type="password"
                name="cpassword"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.cpassword}
                onChange={handleChange}
                minLength="10"
                maxLength="25"
                required
            />
            <button className="btn btn-lg btn-primary border-0 mt-4" type="submit">
                Sign Up
            </button>
            <p className="text-muted mt-4 pb-lg-2">Already have an account? <Link to="/login">Login here</Link></p>
            <p className="text-muted pb-lg-2">Back to <Link to="/">home</Link></p>
            </form>
        </div>
    );
}

export default SignUp;