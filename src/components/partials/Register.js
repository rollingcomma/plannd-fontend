import React from 'react'

className Register extends React.Component {
  
  render() {
    return (
      <div >
        <form className="container modal-content animate" method="post" name="register" action="/register">
          <p>Please fill in this form to create an account</p>

          <label for="username"><b>Username</b></label>
          <span id="usrErr" className="error"></span>
          <input type="text" className="form-control" id="usr" name="username" required/>

          <label for="password"><b>Password</b></label>
          <span id="pwdErr" className="error"></span>
          <input type="password" className="form-control" id="password" name="password" required/>

          <label for="password-repeat"><b>Repeat Password</b></label>
          <span id="pwdRpErr" className="error"></span>
          <input type="password" className="form-control" id="passwordrp" name="passwordRp" required/>

          <label for="email"><b>Email</b></label>
          <span id="emailErr" className="error"></span>
          <input type="email" className="form-control" name="email" required/>
          
          {/* <hr>
            <label>Remember me</label>
            <input type="checkbox" id="rm" name="remember" style="margin-bottom:15px"/>
              <p>By creating an account you agree to our
           <a href="#" style="color:dodgerblue">Terms and Privacy</a>.</p> */}
         </form>
      </div>
    )
  }
}