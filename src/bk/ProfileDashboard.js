import React from 'react'
import ProfileContainer from '../HOC/ProfileContainer'
import {useUserState} from '../../context/customerHook'



const ProfileDashboard = () => {

  const [userState, dispatchUser] = useUserState();

  const handleChangeChk = () => {

  }
  return (
    <div className="d-flex flex-row w-50">
      <div className="div-shadow profile-nav">
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
        <div className="d-flex flex-column overflow-auto m-4">
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" name="checklistItem1" id="notes" value="option1" 
              defaultChecked={userState.user.dashboard.notes} onChange={() => { handleChangeChk() }} />
            <label className="ml-2 form-check-label" htmlFor="checklistItem1">
              Notes
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" name="checklistItem2" id="todos" value="option1"
              defaultChecked={userState.user.dashboard.todos} onChange={() => { handleChangeChk() }} />
            <label className="ml-2 form-check-label" htmlFor="checklistItem2">
              To-Dos
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" name="checklistItem3" id="links" value="option1"
              defaultChecked={userState.user.dashboard.links} onChange={() => { handleChangeChk() }} />
            <label className="ml-2 form-check-label" htmlFor="checklistItem2">
              Links
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" name="checklistItem4" id="gallery" value="option1"
              defaultChecked={userState.user.dashboard.gallery} onChange={() => { handleChangeChk() }} />
            <label className="ml-2 form-check-label" htmlFor="checklistItem2">
              Image Collection
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" name="checklistItem5" id="countdown" value="option1"
              defaultChecked={userState.user.dashboard.countdown} onChange={() => { handleChangeChk() }} />
            <label className="ml-2 form-check-label" htmlFor="checklistItem5">
              Active Countdown
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" name="checklistItem6" id="display_destination" value="option1"
              defaultChecked={userState.user.dashboard.display_destination} onChange={() => { handleChangeChk() }} />
            <label className="ml-2 form-check-label" htmlFor="checklistItem6">
              Image Collection
            </label>
          </div>
          <div className="form-check my-4">
            <input className=" form-check-input switch" type="checkbox" name="checklistItem7" id="theme" value="option1"
              defaultChecked={userState.user.dashboard.theme} onChange={() => { handleChangeChk() }} />
            <label className="ml-2 form-check-label" htmlFor="checklistItem7">
              Disable Themes
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDashboard