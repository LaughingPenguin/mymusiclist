import React, { Component } from 'react'
import axios from 'axios'
import './login.css'

class Login extends Component {
  state = {
      data : {
          email: '',
          password: '',
      }
  }
  handleChange = (e) => {
      const { key, value } = e.target
      this.setState((prevState) => ({
          data : {
              ...prevState.data,
              [key] : value,
          }
      }))
  }
  handleSubmit = (e) => {
      e.preventDefault()
      axios.post("http://localhost/index.php/user/login", this.state.data)
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
            <form class="form-signin">
              <h1 class="h1 mb-5">mymusiclist</h1>
              <h1 class="h3 mb-3">Please login</h1>
              <input
                  type="email" name="email"
                  class="form-control" placeholder="Email address"
                  value={this.state.data.email} onChange={this.handleChange} />
              <input
                  type="password" name="password"
                  class="form-control" placeholder="Password"
                  value={this.state.data.password} onChange={this.handleChange} />
              <button class="btn btn-lg btn-primary border-0 mt-1" type="submit">Login</button>
            </form>
          </body>
      )
  }
}

export default Login