import React, { useState, useRef } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form';
import { useUserState } from '../../context/customerHook';
import Editable from '../shared/Editable'

const ProfileTheme = () => {
  const { register, errors } = useForm();
  const [UserState, dispatchUser] = useUserState();
  const inputRef = useRef();
  const [inputDisableState, setInputDisableState] = useState(
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
  debugger
  //onclick enable editing mode of input field
  const handleOnClickInput = (evt) =>{
    const name = evt.target.name;
    setInputDisableState({
      ...inputDisableState,
      [evt.target.name]: !inputDisableState[name]
    });
  }

  const handleOnChange = (evt) => {
    // const value = evt.target.value;
    // setInputState({
    //   ...inputState,
    //   [evt.target.name]: evt.target.value
    // });
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
      <div className="div-shadow w-50">
        <div className="m-4 mb-5">
          <form className="d-flex flex-column align-items-center justify-content- center w-100">
            <div className="form-group">
              <label className="control-label" htmlFor="username">Username</label>
              {/* <Editable
                text={UserState.user.username}
                childRef={inputRef}
                type="input"
                className="pointer"
              > */}
              <input type="text" className="form-control" name="username" 
                value={UserState.user.username} 
                disabled={inputDisableState.username} 
                onClick={handleOnClickInput}
                onChange={(evt) => { handleOnChange(evt) }}
                ref={register({
                  required: "Username is required",
                  minLength: {
                    value: 3, message: "Minimum length of username is 3 characters!"
                  }
                })} />
              <ErrorMessage errors={errors} name="username">
                {({ message }) => <p className="text-danger my-1">{message}</p>}
              </ErrorMessage>
              {/* </Editable> */}
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="email">Email</label>
              {/* <Editable
                text={UserState.user.username}
                childRef={inputRef}
                type="text"
                className="pointer"
              > */}
              <input type="email" className="form-control" name="email" 
                value={UserState.user.email}
                disabled={inputDisableState.email}
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
                {({ message }) => <p className="text-danger  my-1">{message}</p>}
              </ErrorMessage>
              {/* </Editable> */}
            </div>
            {
              UserState && UserState.user.provider?
              <div> You are logged in with {UserState.user.provider}</div>
                :
              <div className="form-group">
                <label className="control-label" htmlFor="password">Password</label>
                  {/* <Editable
                    text=""
                    childRef={inputRef}
                    type="password"
                    className="pointer"
                    placeholder="password"
                  > */}
                <input type="password" name="password" className="form-control"
                  disabled={inputDisableState.password}
                  placeholder="password"
                  onClick={(evt) => { handleOnClickInput(evt) }}
                  onChange={(evt) => { handleOnChange(evt) }}
                  ref={register({
                    required: "Password is required",
                    minLength: {
                      value: 3, message: "Minimum length of password is 3 characters!"
                    }
                  })} />
                <ErrorMessage errors={errors} name="password">
                    {({ message }) => <p className="text-danger my-1">{message}</p>}
                </ErrorMessage>
                {/* </Editable> */}
              </div>
            }
            </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileTheme