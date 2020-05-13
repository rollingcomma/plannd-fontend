import React from 'react'

const ProfileTheme = () => {

  return (
    <div className="d-flex flex-row profile-container main-content-container">
      <div className="div-shadow w-25 profile-nav">
        <div className="top-function-name">
          <div className="rectangle-To-Dos"></div>
          <p  className="function-name">Theme</p>
          <div className="text-banner-To-Dos"></div>
        </div>
        <div className="">
          <p className="m-4">
            This widget allows you to choose a different theme for your plannd dashboard.
          </p>
          <p className ="mx-4">A variety of colour palettes are provided to match your destination</p>
        </div>
      </div>
      <div className ="div-shadow w-50 h-100">
        <div className="m-3 mt-5">
          <div id="Classic" className="div-shadow m-3 d-flex flex-row w-50">
            <div className="div-shadow classic-primary theme-colour"></div>
            <div className="div-shadow ml-1 classic-secondary theme-colour"></div>
            <p className="mx-4">Classic</p>
          </div>
          <div id="Blossom" className="div-shadow  m-3 d-flex flex-row w-50">
            <div className="div-shadow blossom-primary theme-colour"></div>
            <div className="div-shadow ml-1 blossom-secondary theme-colour"></div>
            <p className="mx-4">Blossom</p>
          </div>
          <div id="Retro" className="div-shadow  m-3 d-flex flex-row w-50">
            <div className="div-shadow retro-primary theme-colour"></div>
            <div className="div-shadow ml-1 retro-secondary theme-colour"></div>
            <p className="mx-4">Retro</p>
          </div>
        </div>
        
      </div>
    </div>
)}

export default ProfileTheme