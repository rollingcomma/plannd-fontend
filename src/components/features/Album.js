import React, { useState, useCallback, useEffect } from 'react'
import FeatureContainer from '../HOC/FeatureContainer';
import Gallery from 'react-photo-gallery';
import SelectedImage from './SelectedImage';
import Uploader from '../shared/Uploader';

const Album = ({content}) => {
  debugger
  const [selectAll, setSelectAll] = useState(false)

  const [uploadState, setUploadState] = useState({open: false})
  
  // const toggleSelectAll = () => {
  //   setSelectAll(!selectAll);
  // }

  if(content && content.images) {
    content.images.map(image=>{
      try{
        image.width = parseInt(image.width)
        image.height = parseInt(image.height)
      } catch (err) {
        console.log(err.message)
      }
      
    })
  }

  const deleteHandler = () =>{

  }

  useEffect(() => {
  },[uploadState.open])

  const toggleFormHandler = () => {
    setUploadState({open: !uploadState.open});
  }

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    []
  );

  return (
    <div className="w-100">
      { content && content.images && 
      <Gallery photos={content.images} renderImage={imageRenderer}/>
      }
      <div>
        {uploadState.open && <Uploader albumId={content._id} handler={toggleFormHandler} />}
      </div>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <button className="btn btn-link text-dark" onClick={() => { deleteHandler() }}><img className="icon-small" src="/assets/garbage.png" alt="delete"/>Trash</button>
        <span>/</span>
        {/* <div className="create-icon"> */}
        <button className="btn btn-link text-dark" onClick={() => toggleFormHandler()}><img src="/assets/add-icon.svg" className="icon-small" alt="add"/>Create</button>
        {/* </div> */}
      </div>
      
    </div >
  )
}

export default FeatureContainer(Album)