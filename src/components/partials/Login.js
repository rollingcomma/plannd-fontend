import React from 'react'
// import connect from '../services/data'

class Login extends React.Component {
  
  render () {

    return(
      <div>
        <div class="container">
          <form action="/login">
            <input type="text" name="username" placeholder="Username" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <input type="submit" value="Login"/>
          </form>
        </div>
        <div>
          <button></button>
        </div>
        <div>
          <button></button>
        </div>
        <div class="bottom-container">
          <div class="row">
            <div class="col">
              <a href="#" style="color:white" class="btn">Register Now </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}