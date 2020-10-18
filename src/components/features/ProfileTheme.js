import React, { useState } from 'react'
import { useUserState } from '../../context/customerHook';
import { updateUser} from '../../services/apiAction'
import Uploader from '../shared/Uploader';

const ProfileTheme = () => {

  
  const [userState, dispatchUser] = useUserState();
  const [uploadState, setUploadState] = useState({ open: false })

  const handleThemeChange = (evt) => {
    const theme = evt.target.getAttribute('id');
    updateUser(userState.user._id, 'preference.theme', theme)
      .then(res => {
        let user = userState.user
        user.preference.theme = theme
        dispatchUser({
          "user": user
        })
      })
      .catch(err => {
        console.log(err)
      })
    }

    const toggleFormHandler = () => {
      setUploadState({open:!uploadState.open});
    }

    const handleUpdateState = () => {
      
    }

  return (
    <div className="profile-sub-container">
      <div className ="div-shadow profile-content">
        <div className="profile-banner">
          <div className="top-function-name">
            <div className="rectangle-To-Dos"></div>
            <p className="function-name">Theme</p>
            <div className="text-banner-To-Dos"></div>
          </div>

        </div>
        <div className="m-3 mt-5">
          <div id="classic" 
            className={`div-shadow p-3 m-3 d-flex flex-row w-75 pointer ${userState && userState.user.preference && userState.user.preference.theme === "classic"? "selected":""}`}
            onClick={(e) => handleThemeChange(e)}>
            <div className="div-shadow classic-primary theme-colour"></div>
            <div className="div-shadow ml-1 classic-secondary theme-colour"></div>
            <p className="mx-4">Classic</p>
          </div>
          <div id="retro" 
            className={`div-shadow p-3 m-3 d-flex flex-row w-75 pointer ${userState && userState.user.preference && userState.user.preference.theme === "retro" ? "selected" : ""}`}
            onClick={(e) => handleThemeChange(e)}>
            <div className="div-shadow retro-primary theme-colour"></div>
            <div className="div-shadow ml-1 retro-secondary theme-colour"></div>
            <p className="mx-4">Retro</p>
          </div>
          <div id="blossom"
            className={`div-shadow p-3 m-3 d-flex flex-row w-75 pointer ${userState && userState.user.preference && userState.user.preference.theme === "blossom" ? "selected" : ""}`}
            onClick={(e) => {
              toggleFormHandler(); 
              handleThemeChange(e)}}>
            <div className="div-shadow blossom-primary theme-colour"></div>
            <div className="div-shadow ml-1 blossom-secondary theme-colour"></div>
            <p className="mx-4">Blossom</p>
          </div>
          <div className="m-2 w-75">
            {uploadState.open && <Uploader toAlbum={false} handleFormState={toggleFormHandler} handleUpdateState={handleUpdateState} />}
          </div>
        </div>
        
      </div>
    </div>
)}

export default ProfileTheme