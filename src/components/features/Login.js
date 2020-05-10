import React from 'react'
import {useHistory, Link, Redirect} from 'react-router-dom'
import { useForm, ErrorMessage} from 'react-hook-form';
import {useUserState} from '../../helpers/customerHook';
import IndexContainer from '../HOC/IndexContainer';

import { getUser} from '../../services/apiAction'

const Login = (props) => {

  const history = useHistory()
  const handleRedirectClick =() =>{
    history.push('/register')
  }

  const { handleSubmit, register, errors} = useForm();
  const [userState, dispatch] = useUserState();
  
  const onSubmit = async (formData) => {
    getUser(formData)
      .then(res => {
        const user = res.data
        if (user.auth) {
          dispatch({
            isLoggedIn:true,
            user:user.user
          })
          history.push('/user/dashboard')
        }
      })
      .catch(err =>{
        console.log(err.message)
      })
  }

  const onClickFacebook = () =>{
    window.open("/api/index/facebook");
  }

  const onClickGoogle = () => {
    window.location = ("/api/index/google");
  }

  // debugger
  return (
    <div className="d-flex flex-column justify-content-center align-items-center side-container">
      <img src="/assets/logo-text.png" className="logo-text mt-4 mb-2" alt="" />
      <button className='social-btn' onClick={onClickGoogle}><img className='icon-medium' src="/assets/search.svg" alt=""/>Signup with Google</button>
      <button className='social-btn' onClick={onClickFacebook}><img className='icon-medium' src="/assets/facebook.svg" alt=""/>Signup with Facebook</button>
      <div className="separator">Or</div>
      <form className="d-flex flex-column align-items-center justify-content- center w-100" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="control-label" htmlFor="email"><b>Email</b></label>
          <input type="email" className="form-control" name="email" placeholder="test@example.com"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              }
            })} />
          <ErrorMessage errors={errors} name="email">
            {({ message }) => <p className="text-danger">{message}</p>}
          </ErrorMessage>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="password"><b>Password</b></label>
          <input type="password" name="password" className="form-control"
            ref={register({
              required: "Password is required",
              minLength: {
                value: 3, message: "Minimum length of password is 3 characters!"
              }
            })} />
          <ErrorMessage errors={errors} name="password">
            {({ message }) => <p className="text-danger">{message}</p>}
          </ErrorMessage>
        </div>
        <div className="form-group">    
        <input type="submit" className="form-control my-3 btn btn-info" name="login" value="Sign In"/>
        </div>
      </form>
      <div className="register-bar"><span className="mx-5">New Here?</span> 
      <button className='my-2 mr-1 btn btn-success' onClick={handleRedirectClick} >Join now</button></div>
      

    </div>
  )
}

export default IndexContainer(Login)