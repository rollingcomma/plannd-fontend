import React, {useEffect, useCallback, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Routes from '../../services/Routes'
import Checklist from '../features/Checklist';
import Editor from '../features/Editor';
import Links from '../features/Links';
import Album from '../features/Album';
import NotFound from '../features/NotFound';
import PrivateRoute from '../../services/PrivateRoute'

const Nav = ({feature}) => {
  
  
  const [content, setContent] = useState(
    { ...feature,
      currentContent: feature.contentArr.length > 0? feature.contentArr[0]:null
    });

  const initialState = {}
  if(content && content.contentArr.length > 0) content.contentArr.forEach(element => initialState[element.title] = true)
  const [inputEditableState, setInputEditableState] = useState(initialState)

  useEffect (() => {
    setContent({
      ...feature,
      currentContent: feature.contentArr.length > 0 ? feature.contentArr[0] : null
    })
  }, [feature, feature.currentContent])

  const handleUpdateState = useCallback((id, contentArr) => {
    const arr = contentArr.filter(element => element._id === id)
    if (arr.length === 1) {
      setContent(
        {
          ...content,
          currentContent:arr[0]
        }
      )
    }
  }, [content.currentContent])

  //onclick enable editing mode of input field
  const handleOnDbClickInput = (evt) => {
    const value = evt.target.value;
    setInputEditableState({
      ...inputEditableState,
      [evt.target.name]: false
    });
  }

  // const handleOnChange = (evt) => {
  //   const value = evt.target.value;
  //   setInputState({
  //     ...inputState,
  //     [evt.target.name]: value
  //   });
  // }

  // const handleEscape = (evt) => {
  //   if (evt.keyCode === 27) {
  //     setState({ open: false });
  //   }
  // }

  // const handleEnter = (evt) => {
  //   if (evt.keyCode === 13) {
  //     setState({ open: false });
  //   }
  // }

  debugger
  return (
    <div className="d-flex flex-row w-75">
      <div className="categories-nav">
        <div className="top-function-name">
          <div className={"rectangle-"+content.name}></div>
        <p id={content._id} className="function-name">{content.name}</p>
          <div className={"text-banner-"+content.name}></div>
        </div>
        <div className="saved-elements-list">
          {content.contentArr.length > 0 && 
          content.contentArr.map(element =>
          <div key={element._id}>
              <p className="pointer" onClick={() => handleUpdateState(element._id, content.contentArr)} id={element._id}>{element.title}</p>
            <hr/>
          </div> 
          )}
          <div className="create-icon">
            <button className="btn btn-link text-dark"><img src="/assets/add-icon.svg" alt="add" />Create</button>
          </div>
        </div>
      </div>
      <Switch>
        <PrivateRoute path= "/user/feature/notes">
          <Editor content={content.currentContent} />
        </PrivateRoute>
        <PrivateRoute path="/user/feature/todos" >
          <Checklist content={content.currentContent} />
        </PrivateRoute>
        <PrivateRoute path="/user/feature/links" >
          <Links content={content.currentContent} />
        </PrivateRoute>
        <PrivateRoute path="/user/feature/gallery" >
          <Album content={content.currentContent} />
        </PrivateRoute>
        <Route >
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
  // }
}

export default Nav