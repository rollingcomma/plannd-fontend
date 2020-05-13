import React from 'react'

const ProfilePicture = () => {

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
            <p className="m-4">Your profile picture will make it easy to see which account is currently logged in.</p>
            <p className="mx-4">You can store multiple images to quickly change your profile picture whenever your please</p>
          </div>
        </div>
        <div className="profile-image-nav mt-3">
          <div className="div-shadow d-flex justify-content-center align-items-center h-100">
            <img className="profile-image-container-lg" src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=silhouette-photo-of-woman-holding-lights-3792581.jpg&fm=jpg"></img>
          </div>
        </div>
      </div>
      
      <div className="div-shadow w-50 h-100">
        <div className="d-flex flex-row m-4">
          <div className="div-shadow m-2 profile-image-container">
            <img className="profile-image-container" src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=silhouette-photo-of-woman-holding-lights-3792581.jpg&fm=jpg"></img>
          </div>
          <div className="div-shadow m-2 profile-image-container">
            <img className="profile-image-container" src="https://images.pexels.com/photos/2566315/pexels-photo-2566315.jpeg?cs=srgb&dl=brown-and-beige-lizard-on-stone-2566315.jpg&fm=jpg"></img>
          </div>

          <div className="div-shadow m-2 profile-image-container d-flex justify-content-center align-items-center">
            <button className="w-100 h-100 btn btn-link"><img src="/assets/add-icon.svg" alt="add" /></button>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <button className="btn btn-link text-dark"><img className="icon-small" src="/assets/garbage.png" alt="delete"/>Trash</button>
          <span>/</span>
          <button className="btn btn-link text-dark"><img className="icon-small" src="/assets/edit.png" alt="delete" />Edit</button>
        </div>
      </div>
      
    </div>
  )
}

export default ProfilePicture