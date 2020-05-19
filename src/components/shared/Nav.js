import React, {useEffect, useCallback, useState, useRef} from 'react';
import { Switch, Route } from 'react-router-dom';
import Checklist from '../features/Checklist';
import Editor from '../features/Editor';
import Links from '../features/Links';
import Album from '../features/Album';
import Editable from '../shared/Editable';
import NotFound from '../features/NotFound';
import PrivateRoute from '../../services/PrivateRoute';
import { useUserState } from '../../context/customerHook';
import { updateAlbum, updateCategory, updateChecklist, updateNotebook, 
        deleteNotebook, deleteCategory, deleteChecklist, deleteAlbum,
        addNotebook, addCategory, addChecklist, addAlbum } from '../../services/apiAction'

const Nav = ({feature}) => {
  const [userState] = useUserState()
  const pins = userState.user.pins;
  const inputRef = useRef();
  
  const [content, setContent] = useState(
    { ...feature,
      currentContent: feature.contentArr.length > 0? feature.contentArr[0]:null
    });
  
  const [inputState, setInputState] = useState({title:content.currentContent.title || ""})
  const [newListState, setNewListState] = useState({title:""})
  const [addFormState, setAddFormState] = useState({open:false})

  const toggleAddFormHandler = () => {
    setAddFormState({open:!addFormState.open})
  }
  
  useEffect (() => {
    setContent({
      ...feature,
      currentContent: feature.contentArr.length > 0 ? feature.contentArr[0] : null
    })
  }, [feature, feature.currentContent])

  const handleUpdateState = useCallback((id, contentArr) => {
    const arr = contentArr.filter(element => element._id === id)
    if (arr.length === 1) {
      setContent({
          ...content,
          currentContent:arr[0]
      })
      setInputState({title:arr[0].title})
    }
  }, [content.currentContent])

  const filterFeature = (id, formData, isDelete, isAdd) => {
    const projectId = userState.user.preference.activeProject
    switch (content.name) {
      case "Notes":
        if (isDelete) return deleteNotebook(projectId, id)
        if (isAdd) return addNotebook(projectId, formData)
        formData.notebookId = id
        return updateNotebook(projectId, formData)
      case "Links":
        if (isDelete) return deleteCategory(projectId, id)
        if (isAdd) return addCategory(projectId, formData)
        formData.categoryId = id
        return updateCategory(projectId, formData) 
      case "To-Dos":
        if (isDelete) return deleteChecklist(projectId, id)
        if (isAdd) return addChecklist(projectId, formData)
        formData.checklistId = id
        return updateChecklist(projectId, formData)
      case "Gallery":
        if (isDelete) return deleteAlbum(projectId, id)
        if (isAdd) return addAlbum(projectId, formData)
        formData.albumId = id
        return updateAlbum(projectId, formData)
      default:
        return null
    }
  }

  debugger
  const handleOnKeyDown = (index) => {
    const formData = { title: inputState.title }
    const apiCall = filterFeature(content.contentArr[index]._id, formData, false)
    if (apiCall) {
      apiCall
      .then(res => {
        // if(res.result) {
        content.contentArr[index].title = inputState.title
        setContent({ ...content, contentArr: content.contentArr })
        // }
      })
      .catch(err => console.log(err.message))
    }
  }

  const handleDelete = (index) => {
    console.log('delete')
    debugger
    const apiCall = filterFeature(content.contentArr[index]._id, null, true)
    if(apiCall) {
      apiCall
      .then(res => {
        content.contentArr.splice(index, 1)
        setContent({ ...content, contentArr: content.contentArr })
      })
    }
  }

  const handleCreateNewList = () => {
    const formData = { title: newListState.title }
    const apiCall = filterFeature(null, formData, false, true)
    if (apiCall) {
      apiCall
      .then(res => {
        content.contentArr = res.data.lists
        setContent({ ...content, contentArr: content.contentArr })
        setAddFormState({ open: !addFormState.open })
      })
      .catch(err => console.log(err.message))
    }
  }
  // debugger
  return (
    <div className="d-flex flex-row w-75">
      <div className="categories-nav">
        <div className="top-function-name">
          <div className={"rectangle-"+content.name}></div>
          <p id={content._id} className="function-name">{content.name}</p>
          <div className={"text-banner-"+content.name}></div>
        </div>
        <div className="saved-elements-list pt-2">
          {content.contentArr.length > 0 && 
          content.contentArr.map((element, index) => (
          <div key={element._id} className={`d-flex align-items-center border-bottom border-secondary ${element._id === content.currentContent._id ? "selected" : ""}`}>
            <div className='my-3'>
              <Editable
                text={element.title}
                childRef={inputRef}
                type="text"
                index={index}
                className="pointer"
                handleDelete= {() => handleDelete(index)}
                onClick={() => handleUpdateState(element._id, content.contentArr)}
              >
                <input
                  id={element._id}
                  ref={inputRef}
                  type="text"
                  name="title"
                  value={inputState.title || element.title}
                  onChange={e => {
                    setInputState({title: e.target.value})
                  }}
                  onKeyDown={(evt)=> {if(evt.key==="Enter") handleOnKeyDown(index)}}
                />
              </Editable>
            </div>
            <hr/>
          </div> 
          ))}
          <div className="mt-2">
            {addFormState.open && 
              <input type="text" name="title"
                onChange={e => {
                  setNewListState({ title: e.target.value })
                }} 
                onKeyDown={(evt) => { if (evt.key === "Enter") handleCreateNewList() }}/> }
            <div className="create-icon">
              <button className="btn btn-link text-dark" onClick={()=> toggleAddFormHandler()}>
              <img src="/assets/add-icon.svg" alt="add" />Create</button>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-container">
        <Switch>
          <PrivateRoute path="/user/feature/notes">
            <Editor content={content.currentContent} pins={pins} />
          </PrivateRoute>
          <PrivateRoute path="/user/feature/todos" >
            <Checklist content={content.currentContent} pins={pins} />
          </PrivateRoute>
          <PrivateRoute path="/user/feature/links" >
            <Links content={content.currentContent} pins={pins} />
          </PrivateRoute>
          <PrivateRoute path="/user/feature/gallery" >
            <Album content={content.currentContent} pins={pins} />
          </PrivateRoute>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </div>
      
    </div>
  )
}

export default Nav