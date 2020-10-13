import React, {useState} from 'react'
import Uploader from '../shared/Uploader';
import { useUserState, } from '../../context/customerHook';
import SelectedImage from './SelectedImage'
import { deleteProfilePictures, updateUser } from '../../services/apiAction';

const ProfilePicture = () => {

  const [uploadState, setUploadState] = useState({ open: false })
  const [userState, dispatchUser] = useUserState()
  const [selected, setSelected] = useState({images:[]})
  const [errorState, setErrorState] = useState(null)
  
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
    if(selected.images.length === 1) 
      updateUser(userState.user._id, 'profile_photo', selected.images[0])
      .then(res => {
        let user = userState.user
        const profile_photo = user.pictures.filter(picture => picture._id === selected.images[0])
        user.profile_photo = profile_photo[0]
        dispatchUser(
          { user: user }
        )
      })
      .catch(err => console.log(err.message))
    else 
     setErrorState({message:"Please choose only one photo"})
  }
  
  const toggleFormHandler = () => {
    setUploadState({ open: !uploadState.open });
  }

  return (
    <div className="profile-container">
      <div className="div-shadow profile-content">
        <div className="d-flex flex-row flex-wrap m-4">
          {userState.user && userState.user.pictures && userState.user.pictures.map(picture => 
          <SelectedImage
            key={picture._id}
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
        <div className="m-2 w-50">
          {uploadState.open && <Uploader toAlbum={false} handleFormState={toggleFormHandler} handleUpdateState={handleUpdateState}/>}
        </div>
        {errorState && <p className="text-danger">{errorState.message}</p>}
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <button className="btn btn-link text-dark" onClick={() => handleDelete()}><img className="icon-small" src="/assets/garbage.png" alt="delete"/>Trash</button>
          <span>/</span>
          <button className="btn btn-link text-dark" onClick={() => handleEdit()}><img className="icon-small" src="/assets/edit.png" alt="edit" />Pick</button>
        </div>
      </div>
      
    </div>
  )
}

export default ProfilePicture