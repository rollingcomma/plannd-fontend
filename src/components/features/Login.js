import React from 'react'
import IndexContainer from '../HOC/IndexContainer'
const Login = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center side-container">
      <img src="/assets/logo-text.png" className="logo-text mt-4 mb-2" alt="" />
      <button className='social-btn' href=""><img className='icon-medium' src="/assets/search.svg" alt=""/>Signup with Google</button>
      <button className='social-btn' href=""><img className='icon-medium' src="/assets/facebook.svg" alt=""/>Signup with Facebook</button>
      <hr className="hr-text" data-content="OR"/>
      <form className="d-flex flex-column align-items-center justify-content- center w-100" method="post" name="login" action="/login">
        <label className="control-label" htmlFor="email">Email</label>
        <span id="emailErr" className="error"></span>
        <input type="email" className="form-control" name="email" required />

        <label className="control-label" htmlFor="password">Password</label>
        <span id="pwdErr" className="error"></span>
        <input type="password" className="form-control" id="password" name="password" required />

        <input type="submit" className="form-control my-3 btn btn-info" name="login" value="Sign In" />
      </form>
      <div className="">New Here? <button className='join-btn' onClick="location.href='/registration'" >Join now</button></div>
      

    </div>
  )
}

export default IndexContainer(Login)