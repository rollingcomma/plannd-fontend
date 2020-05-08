import React from 'react'
import ProfileContainer from '../HOC/ProfileContainer'


const Profile = (props) => {
  return (
    <div >
      
      <h1> I'm a profile placeholder</h1>
      {/* <input id="s1" type="checkbox" class="switch"/>
        <label for="s1">Switch</label>
  
        <input id="s2" type="checkbox" class="switch" checked/>
          <label for="s2">Switch</label> */}
    </div>
  )
}

export default ProfileContainer(Profile)