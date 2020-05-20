import React, { useState, useEffect } from 'react'
import { ReactTinyLink } from 'react-tiny-link'
import FeatureContainer from '../HOC/FeatureContainer'
import {addLink, deleteLink} from '../../services/apiAction'
import useUserState from '../../context/customerHook'

const Links = ({content}) => {
  debugger
  //props.content.links.map
  const [state, setState] = useState(content)
  const [categoryState, setCategoryState] = useState(content)
  const [newLinkState, setNewLinkState] = useState({ link: "" })
  const [addFormState, setAddFormState] = useState({ open: false })
  const [userState] = useUserState()

  useEffect(() => { setCategoryState({ ...content})},[content])
  
  const toggleAddFormHandler = () => {
    setAddFormState({ open: !addFormState.open })
  }

  const handleDelete = (index) => {
    console.log('delete')
    debugger
    deleteLink(
      userState.user.preference.activeProject,
      categoryState._id,
      categoryState.links[index]._id
    )
      .then(res => {
        if (res.data.success) {
          categoryState.links.splice(index, 1)
          setCategoryState({ ...categoryState })
        }
      })
      .catch(err => console.log(err.message))
  }

  const handleCreateNewLink = () => {
    const formData = { link: newLinkState.link }
    addLink(
      userState.user.preference.activeProject,
      categoryState._id,
      formData
    )
    .then(res => {
      const newLink = {
        _id: res.data.linkId,
        link: newLinkState.link
      }
      categoryState.links.push(newLink)
      setCategoryState({ ...categoryState })
      setAddFormState({ open: !addFormState.open })
    })
    .catch(err => console.log(err.message))
  }

  return (
    <div className="d-flex flex-column overflow-auto ml-3">
      {categoryState && categoryState.links &&
        categoryState.links.map(element => 
        <div key={element._id} className="m-1"> 
          <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url={element.link}>
          </ReactTinyLink>
        </div>
      )}
      <div>
        {addFormState.open &&
          <input type="text" name="item" placeholder="Enter a new link address"
            onChange={e => {
              setNewLinkState({ link: e.target.value })
            }}
            onKeyDown={(evt) => { if (evt.key === "Enter") handleCreateNewLink() }} />}
      </div>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <button className="btn btn-link text-dark"><img className="icon-small" src="/assets/garbage.png" alt="delete" />Trash</button>
        <span>/</span>
        <div className="create-icon">
          <button className="btn btn-link text-dark" onClick={() => toggleAddFormHandler()}><img src="/assets/add-icon.svg" alt="add" />Create</button>
        </div>
      </div>
    </div>
    
  )
}

export default FeatureContainer(Links)