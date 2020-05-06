import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm, ErrorMessage} from 'react-hook-form'
import IndexContainer from '../HOC/IndexContainer'
import { sameAs } from '../../helpers/validator'
import useUserState from '../../helpers/customerHook';
import { postUser } from '../../services/apiAction'

const Register = (props) => { 
  const history = useHistory()
  const handleRedirectClick = () => {
    history.push('/login')
  }
  const { handleSubmit, register, errors, getValues } = useForm();
  
  const [userState, dispatch] = useUserState();
  
  const onSubmit = async (formData) => {
    debugger
    postUser(formData)
      .then(res => {
        const user = res.data
        if (user) {
          dispatch({
            isLoggedIn: true,
            user: user
          })
          debugger
          history.push('/')
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  debugger

  return (
    <div className="d-flex flex-column justify-content-center align-items-center side-container">
      <img src="/assets/logo-text.png" className="logo-text mt-4 mb-2" alt="" />
      <form className="d-flex flex-column align-items-center justify-content- center w-100" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="control-label" htmlFor="email"><b>Email</b></label>
          <input type="email" name="email" className="form-control" placeholder="test@example.com"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              }
            })} />
          <ErrorMessage errors={errors} name="email">
            {({message}) => <p className="text-danger">{message}</p>}
          </ErrorMessage>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="username"><b>Username</b></label>
          <input type="username" name="username" className="form-control" 
            ref={register({
              required: "Username is required",
              minLength: {
                value: 3, message:"Minimum length of username is 3 characters!"}
            })} />
          <ErrorMessage errors={errors} name="username">
            {({ message }) => <p className="text-danger">{message}</p>}
          </ErrorMessage>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="password"><b>Password</b></label>
          <input type="password" name="password" className="form-control" 
          ref={register({
            required: "Password is required",
            minLength: {
              value: 4, message: "Minimum length of password is 4 characters!"
            }
          })} />
          <ErrorMessage errors={errors} name="password">
            {({ message }) => <p className="text-danger">{message}</p>}
          </ErrorMessage>
        </div>
       
      <div className="form-group">
        <label className="control-label" htmlFor="password-confirm"><b>Password Confirmation</b></label>
          <input type="password" className="form-control"  name="password-confirm" 
        ref={register({
          required: "Password is required",
          minLength: {
            value: 4, message: "Minimum length of password is 4 characters!"
          },
          validate: sameAs('password', getValues)
        })} />
          <ErrorMessage errors={errors} name="password-confirm">
            {({ message }) => <p className="text-danger">{message}</p>}
          </ErrorMessage>
        </div>
        
       <div className="form-group">
        <input type="submit" className="form-control my-3 btn btn-info" name="Register" value="Register"/>
        </div>
      </form>
      <div className="register-bar"><span className="mx-3">Already have an account?</span>
        <button className='my-2 mr-1 btn btn-success' onClick={handleRedirectClick} >Sign In</button></div>
      </div>
  )
}
export default IndexContainer(Register)