import React, { useState } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form';
import { useUserState } from '../../context/customerHook';
import { updateUser } from '../../services/apiAction';

const ProfileSetting = () => {
  const { register, errors } = useForm();
  const [userState, dispatchUser] = useUserState();
  const [state, setState] = useState(userState.user)
  const [errorState, setErrorState] = useState(null);
  
  const [inputDisableState, setInputDisableState] = useState(
    userState.user.provider ?
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
  
  const handleOnClickInput = (e, key) =>{
    e.preventDefault();
    setInputDisableState({
      ...inputDisableState,
      [key]: !inputDisableState[key]
    });
  }

  const handleKeyDown = (evt) => {
    const value = evt.target.value;
    const key = evt.target.name;
    if(evt.key === "Enter") 
      updateUser(userState.user._id, key, value)
      .then(res => {
        if(res.data.error) 
          setErrorState({ message: res.data.error})
        else if(key !=='password') {
          let user = userState.user
          user[key] = value
          dispatchUser(
            {user:user}
          )
        }
      })
      .catch(err => console.log(err.message))
  }

  
  return (
    <div className="profile-container">
      <div className="div-shadow profile-nav">
        <div className="top-function-name">
          <div className="rectangle-Gallery"></div>
          <p className="function-name">User Information</p>
          <div className="text-banner-Gallery"></div>
        </div>
        <div className="">
          <p className="m-4">
            Customize your user info here!
          </p>
        </div>
      </div>
      <div className="div-shadow profile-content">
        <div className="m-4 mb-5">
          <form className="d-flex flex-column align-items-center justify-content- center w-100">
            <div className="form-group">
              <div className="d-flex flex-row justify-content-between align-items-center">
              <label className="control-label" htmlFor="username">Username</label>
              <button className="btn btn-link" onClick={(e) => handleOnClickInput(e, "username")}><img src="/assets/pen.png" className="icon-small" alt="edit"/></button>
              </div>
               <input type="text" className="form-control" name="username" 
                placeholder={state.username} 
                disabled={inputDisableState.username} 
                onKeyDown={e => handleKeyDown(e)}
                onChange={e => {
                  setState({ ...state, username: e.target.value })
                }}
                ref={register({
                  required: "Username is required",
                  minLength: {
                    value: 3, message: "Minimum length of username is 3 characters!"
                  }
                })} />
              <ErrorMessage errors={errors} name="username">
                {({ message }) => <p className="text-danger my-1">{message}</p>}
              </ErrorMessage>
            </div>
            
            <div className="form-group">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <label className="control-label" htmlFor="email">Email</label>
                <button className="btn btn-link" onClick={(e) => handleOnClickInput(e, "email")}><img src="/assets/pen.png" className="icon-small" alt="edit" /></button>
              </div>
              <input type="email" className="form-control" name="email" 
                value={state.email}
                disabled={inputDisableState.email}
                onKeyDown={e => handleKeyDown(e)}
                onChange={e => {
                  setState({...state, email:e.target.value})
                }}
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address"
                  }
                })}/>
              <ErrorMessage errors={errors} name="email">
                {({ message }) => <p className="text-danger  my-1">{message}</p>}
              </ErrorMessage>
              {errorState && <p className="text-danger  my-1">{errorState.message}</p>}
            </div>
            {
              userState && userState.user.provider?
              <div> You are logged in with {userState.user.provider}</div>
                :
              <div className="form-group">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <label className="control-label" htmlFor="password">Password</label>
                    <button className="btn btn-link" onClick={(e) => handleOnClickInput(e, "password")}><img src="/assets/pen.png" className="icon-small" alt="edit" /></button>
                  </div>
                <input type="password" name="password" className="form-control"
                  disabled={inputDisableState.password}
                  placeholder="******" 
                  onKeyDown={e => handleKeyDown(e)}
                  onChange={e => {
                    setState({ ...state, password: e.target.value })
                  }}
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

export default ProfileSetting