import React, { useState } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form';
import { useUserState } from '../../context/customerHook'

const ProfileTheme = () => {
  const { register, errors } = useForm();
  const [UserState, dispatch] = useUserState()
  const [inputEditableState, setInputEditableState] = useState(
  
    UserState.user.provider ?
    {
      username: true,
      email: true
    }
    :
    {
      username: true,
      email: true,
      password: true
    }
  )
  const [inputState, setInputState] = useState()

  //onclick enable editing mode of input field
  const handleOnClickInput = (evt) =>{
    const value = evt.target.value;
    setInputEditableState({
      ...inputEditableState,
      [evt.target.name]:false
    });
  }

  const handleOnChange = (evt) => {
    const value = evt.target.value;
    setInputState({
      ...inputState,
      [evt.target.name]: value
    });
  }


  return (
    <div className="d-flex flex-row profile-container main-content-container">
      <div className="div-shadow w-25 profile-nav">
        <div className="top-function-name">
          <div className="rectangle-To-Dos"></div>
          <p className="function-name">User Information</p>
          <div className="text-banner-To-Dos"></div>
        </div>
        <div className="">
          <p className="m-4">
            Customize your user info here!
          </p>
        </div>
      </div>
      <div className="div-shadow w-50 h-100">
        <div className="m-4 mb-5">
          <form className="d-flex flex-column align-items-center justify-content- center w-100">
            <div className="form-group">
              <label className="control-label" htmlFor="username"><b>Username</b></label>
              <input type="text" className="form-control" name="username" 
                value={UserState.user.username} 
                disabled={inputEditableState.username} 
                onClick={(evt)=>{handleOnClickInput(evt)}}
                onChange={(evt) => { handleOnChange(evt) }}
                ref={register({
                  required: "Username is required",
                  minLength: {
                    value: 3, message: "Minimum length of username is 3 characters!"
                  }
                })} />
              <ErrorMessage errors={errors} name="username">
                {({ message }) => <p className="text-danger">{message}</p>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="email"><b>Email</b></label>
              <input type="email" className="form-control" name="email" 
                value={UserState.user.email}
                disabled={inputEditableState.email}
                onClick={(evt) => { handleOnClickInput(evt) }}
                onChange={(evt) => { handleOnChange(evt) }}
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
            {
              UserState && UserState.user.provider?
              <div> You are logged in with {UserState.user.provider}</div>
                :
              <div className="form-group">
                <label className="control-label" htmlFor="password"><b>Password</b></label>
                <input type="password" name="password" className="form-control"
                  disabled={inputEditableState.password}
                  onClick={(evt) => { handleOnClickInput(evt) }}
                  onChange={(evt) => { handleOnChange(evt) }}
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
            }
            </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileTheme