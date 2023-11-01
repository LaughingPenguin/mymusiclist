import React, { Component } from 'react'
import axios from 'axios'
import './signup.css'

class SignUp extends Component {
    state = {
        data : {
            username : "",
            email : "",
            password : "",
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState((prevState) => ({
            data : {
                ...prevState.data,
                [name] : value,
            }
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/index.php/user/signup", this.state.data)
            .then((response) => {
                console.log('Form data submitted successfully', response)
            })
            .catch((error) => {
                console.error('Error submitting form data', error)
            })
    }
    render() {
        return (
            <body class="text-center d-flex flex-column justify-content-center bg-Platinum">
              <form class="form-signup" onSubmit={this.handleSubmit}>
                <h1 class="h1 mb-5">mymusiclist</h1>
                <h1 class="h3 mb-3">Register for an account</h1>
                <input
                    type="username" name="username"
                    class="form-control" placeholder="Username"
                    value={this.state.data.username} onChange={this.handleChange} />
                <input
                    type="email" name="email"
                    class="form-control" placeholder="Email"
                    value={this.state.data.email} onChange={this.handleChange} />
                <input
                    type="password" name="password"
                    class="form-control" placeholder="Password"
                    value={this.state.data.password} onChange={this.handleChange} />
                <button class="btn btn-lg btn-primary border-0 mt-1" type="submit">Sign Up</button>
              </form>
            </body>
        )
    }
}

export default SignUp