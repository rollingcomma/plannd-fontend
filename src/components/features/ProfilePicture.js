import React, { useState } from 'react'
import Uploader from '../shared/Uploader';
import useUserState from '../../context/customerHook';
import SelectedImage from './SelectedImage'
import { deleteProfilePictures, updateProfilePicture } from '../../services/apiAction';

const ProfilePicture = () => {

  const [uploadState, setUploadState] = useState({ open: false })
  const [userState, dispatchUser] = useUserState()
  const [selected, setSelected] = useState({images:[]})
  
  const handleUpdateState = (pictures) => {
    let user = userState.user
      user.pictures = pictures
      dispatchUser(
        {user:user}
      )
  }

  const handleSelected = (isAdd, change) => {
    if (isAdd){
      selected.images.push(change)
      setSelected({
        images: selected.images
      })
    } else {
      const index = selected.images.indexOf(change)
      if (index > -1) 
        selected.images.splice(index, 1)
        setSelected({images: selected.images})
    }
  }

  debugger
  const handleDelete = () => {
    deleteProfilePictures(userState.user._id, {images:selected.images})
    .then(res => {
      let user = userState.user
      user.pictures = res.data.result
      dispatchUser(
        {user:user}
      )
    })
    .catch(err => {
      console.log(err.message)
    }) 
  }

  const handleEdit = () => {
    if(selected.images.length === 1) {
      updateProfilePicture(userState.user._id, selected.images[0])
      .then(res => {
        let user = userState.user
        const profile_photo = user.pictures.filter(picture => picture._id === selected.images[0])
        user.profile_photo = profile_photo[0]
        dispatchUser(
          { user: user }
        )
      })
      .catch(err => console.log(err.message))
    }
  }
  
  const toggleFormHandler = () => {
    setUploadState({ open: !uploadState.open });
  }

  return (
    <div className="d-flex flex-row profile-container main-content-container">
      <div className="d-flex flex-column w-25">
        <div className="div-shadow profile-image-nav">
          <div className="top-function-name">
            <div className="rectangle-Notes"></div>
            <p className="function-name">Profile Picture</p>
            <div className="text-banner-Notes"></div>
          </div>
          <div className="">
            <p className="m-2 mt-5">Your profile picture will make it easy to see which account is currently logged in.</p>
            <p className="mx-2">You can store multiple images to quickly change your profile picture whenever your please</p>
          </div>
        </div>
        <div className="profile-image-nav mt-3">
          <div className="div-shadow d-flex justify-content-center align-items-center h-100">
            <img className="profile-image-container-lg" alt="" src={userState.user? userState.user.profile_photo.src:""}></img>
          </div>
        </div>
      </div>
      
      <div className="div-shadow w-50">
        <div className="d-flex flex-row flex-wrap m-4">
          {userState.user && userState.user.pictures.map(picture => 
          <SelectedImage
            className={`div-shadow m-2 profile-image-container ${picture._id === userState.user.profile_photo._id ? "active-profile-photo" : ""}`}
            photo={picture}
            selected={false}
            imgClassName="profile-image-container"
            handleSelected = {handleSelected}
            />
          )}
          <div className="div-shadow m-2 profile-image-container d-flex justify-content-center align-items-center">
            <button className="w-100 h-100 btn btn-link" onClick={() => toggleFormHandler()}><img src="/assets/add-icon.svg" alt="add" /></button>
          </div>
        </div>
        <div>
          {uploadState.open && <Uploader toAlbum={false} handleFormState={toggleFormHandler} handleUpdateState={handleUpdateState}/>}
        </div>
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <button className="btn btn-link text-dark" onClick={() => handleDelete()}><img className="icon-small" src="/assets/garbage.png" alt="delete"/>Trash</button>
          <span>/</span>
          <button className="btn btn-link text-dark" onClick={() => handleEdit()}><img className="icon-small" src="/assets/edit.png" alt="delete" />Edit</button>
        </div>
      </div>
      
    </div>
  )
}

export default ProfilePicture