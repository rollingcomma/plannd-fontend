import React from 'react'
import IndexContainer from '../HOC/IndexContainer'
const Register = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center side-container">
      <img src="/assets/logo-text.png" className="logo-text mt-4 mb-2" alt="" />
      <form className="d-flex flex-column align-items-center justify-content- center w-100" method="post" name="login" action="/login">
        <label className="control-label" htmlFor="email"><b>Email</b></label>
        <span id="emailErr" className="error"></span>
        <input type="email" className="form-control" name="email" required />

        <label className="control-label" htmlFor="username"><b>Username</b></label>
        <span id="emailErr" className="error"></span>
        <input type="email" className="form-control" name="email" required />
        
        <label className="control-label" htmlFor="password"><b>Password</b></label>
        <span id="pwdErr" className="error"></span>
        <input type="password" className="form-control" id="password" name="password" required />

        <label className="control-label" htmlFor="password-reapeat"><b>Repeat Password</b></label>
        <span id="pwdErr" className="error"></span>
        <input type="password" className="form-control" id="password" name="password" required />
        <input type="submit" className="form-control my-3 btn btn-info" name="Register" value="Register"/>
      </form>
    </div>
  )
}
export default IndexContainer(Register)