import React, { useState, useCallback, useEffect } from 'react'
import FeatureContainer from '../HOC/FeatureContainer';
import Gallery from 'react-photo-gallery';
import SelectedImage from './SelectedImage';
import Uploader from '../shared/Uploader';
import useUserState from '../../context/customerHook';
import { deletePicture } from '../../services/apiAction';

const Album = ({content}) => {
  // debugger
  const [selected, setSelected] = useState({images:[]})
  const [images, setImages] = useState(content.images);
  const [uploadState, setUploadState] = useState({open: false})
  const [userState] = useUserState()
  
  useEffect(() => { setImages(content.images) }, [content])

  if(images) {
    images.map(image=>{
      try{
        image.width = parseInt(image.width)
        image.height = parseInt(image.height)
        
      } catch (err) {
        console.log(err.message)
        image.width = 1
        image.height =1
      }
      return image
    })
  }

  const handleSelected = (isAdd, change) => {
    if (isAdd) {
      selected.images.push(change)
      setSelected({
        images: selected.images
      })
    } else {
      const index = selected.images.indexOf(change)
      if (index > -1)
        selected.images.splice(index, 1)
      setSelected({ images: selected.images })
    }
  }
  debugger
  const handleUpdateState = (newChanges) => {
    const newImages = images.concat(newChanges)
    setImages(newImages)
    // setUploadState({ open: !uploadState.open });
  }

  const handleDelete = () => {
    deletePicture(userState.user.preference.activeProject, content._id, selected.images)
    .then(res => {
      if(res.data.success) {
        const newImages = images.filter(image => !selected.images.includes(image._id))
        setImages(newImages)
      }
    })
    .catch(err=> console.log(err.message))
  }

  // useEffect(() => {
  // }, [images])

  // useEffect(() => {
  // },[uploadState.open])

  const toggleFormHandler = () => {
    setUploadState({open: !uploadState.open});
  }

  const imageRenderer = useCallback(
    ({  left, top, key, photo }) => (
      <SelectedImage
        selected={false}
        key={key}
        margin={"2px"}
        photo={photo}
        left={left}
        top={top}
        handleSelected = {handleSelected}
      />
    ),
    []
  );

  return (
    <div className="w-100">
      { images && 
      <Gallery photos={images} renderImage={imageRenderer}/>
      }
      <div>
        { uploadState.open && 
          <Uploader toAlbum={true} 
            albumId={content._id} 
            handleFormState={toggleFormHandler} 
            handleUpdateState={handleUpdateState}/>}
      </div>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <button className="btn btn-link text-dark" 
          onClick={() => { handleDelete() }}>
            <img className="icon-small" src="/assets/garbage.png" alt="delete"/>
            Trash
        </button>
        <span>/</span>
        {/* <div className="create-icon"> */}
        <button className="btn btn-link text-dark" 
          onClick={() => toggleFormHandler()}>
            <img src="/assets/add-icon.svg" className="icon-small" alt="add"/>
            Create
        </button>
        {/* </div> */}
      </div>
      
    </div >
  )
}

export default FeatureContainer(Album)