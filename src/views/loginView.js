import React from 'react'
import axios from 'axios'
import './login.css'

const Login = async () => {

  let res = await axios.post("http;//localhost/index.php/user/login", { email, password })

  return (
    <body class="text-center d-flex flex-column justify-content-center bg-Platinum">
      <form class="form-signin">
        <h1 class="h1 mb-5">mymusiclist</h1>
        <h1 class="h3 mb-3">Please login</h1>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" />
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" />
        <button class="btn btn-lg btn-primary border-0 mt-1" type="submit">Sign in</button>
      </form>
    </body>
  )
}

export default Login