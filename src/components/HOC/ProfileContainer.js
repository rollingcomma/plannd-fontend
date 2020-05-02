import React from 'react'


const ProfileContainer = (Component) => ({ content }) => {
  return (
    <div>
      
      <Component content={content}></Component>
    </div>
  )
}

export default ProfileContainer