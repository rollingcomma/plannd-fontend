import React, { useState } from 'react'
import {useUserState} from '../../context/customerHook'
import { updateUser } from '../../services/apiAction'

const ProfileDashboard = () => {
  
  const [userState, dispatchUser] = useUserState();
  const [countdownFormState, setCountdownFormState] = useState({open:false})
  
  debugger
  const handleChangeChk = (evt) => {
    const name = evt.target.name;
    const value = evt.target.checked;
  
    if (name === "countdown" && (value || countdownFormState.open)) {
      setCountdownFormState(
        { open: !countdownFormState.open }
      )
    }
    updateUser(userState.user._id, `dashboard.${name}`, value)
    .then(res => {
      let user = userState.user
      user.dashboard[name] = value
      dispatchUser({
        user: user
      })
    })
    .catch(err => console.log(err.message))
  }
 
  const onSubmit = async (evt) => {
    setCountdownFormState(
      { open: !countdownFormState.open }
    )
    console.log(evt.target)
    const formData = {
      time: evt.target.time.value,
      destination: evt.target.destination.value
    } 
    updateUser(userState.user._id, "trip_plan", formData)
    .then(res => {
      let user = userState.user
      user.trip_plan = formData
      dispatchUser({
        user: user
      })
    })
    .catch(err => console.log(err.message))
  }

  return (
    <div className="d-flex flex-row profile-container main-content-container">
      <div className="div-shadow w-25 profile-nav">
        <div className="top-function-name">
          <div className="rectangle-Links"></div>
          <p className="function-name">Dashboard</p>
          <div className="text-banner-Links"></div>
        </div>
        <div className="">
          <p className="m-4">
            Change the widgets on your dashboard here!
          </p>
        </div>
      </div>
      <div className="div-shadow ml-2 w-50">
        <div className="d-flex flex-column overflow-auto m-4 checklist-switch">
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" 
              name="notes"
              defaultChecked={userState.user.dashboard.notes} 
              onChange={(e) => { handleChangeChk(e) }} />
            <label className="ml-2 form-check-label" htmlFor="notes">
              Notes
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" 
              name="todos"
              defaultChecked={userState.user.dashboard.todos} 
              onChange={(e) => { handleChangeChk(e) }} />
            <label className="ml-2 form-check-label" htmlFor="todos">
              To-Dos
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" 
              name="links" 
              defaultChecked={userState.user.dashboard.links} 
              onChange={(e) => { handleChangeChk(e) }} />
            <label className="ml-2 form-check-label" htmlFor="links">
              Links
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" 
              name="gallery"
              defaultChecked={userState.user.dashboard.gallery} 
              onChange={(e) => { handleChangeChk(e) }} />
            <label className="ml-2 form-check-label" htmlFor="gallery">
              Image Collection
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" 
              name="countdown"
              defaultChecked={userState.user.dashboard.countdown} 
              onChange={(e) => { handleChangeChk(e) }} />
            <label className="ml-2 form-check-label" htmlFor="countdown">
              Active Countdown
            </label>
          </div>
          {countdownFormState.open && 
            <form className="ml-5 pl-3" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <p>Enter the date of your upcoming trip</p>
                <input className="" type="date"
                  name="time" placeholder="2020-06-12" min={(new Date()).toLocaleDateString()} max="2022-01-01"/>
              </div>
              <div className="form-group">
              <p>Enter your destination</p>
                <input className="" type="text"
                  name="destination" />
              </div>
            <input className="btn btn-info" value="submit" type="submit"/>
            </form>}
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" 
              name="destination" 
              defaultChecked={userState.user.dashboard.display_destination} 
              onChange={(e) => { handleChangeChk(e) }} />
            <label className="ml-2 form-check-label" htmlFor="destination">
              Image Collection
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" 
              name="theme" 
              defaultChecked={userState.user.dashboard.theme} 
              onChange={(e) => { handleChangeChk(e) }} />
            <label className="ml-2 form-check-label" htmlFor="theme">
              Disable Themes
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDashboard