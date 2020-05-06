import React, {useEffect, useCallback, useState} from 'react';
import { Switch } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Routes from '../../services/Routes'
import Checklist from '../features/Checklist';
import Editor from '../features/Editor'
import Links from '../features/Links'
import Album from '../features/Album'
import PrivateRoute from '../../services/PrivateRoute'

const Nav = ({feature}) => {
  
  const [content, setContent] = useState(
    { ...feature,
      currentContent: feature.contentArr[0]
    });
  
  useEffect (() => {
    setContent({
      ...feature,
      currentContent: feature.contentArr[0]
    })
  }, [feature])

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

  debugger
  return (
    <div className="d-flex flex-row w-75">
      <div className="categories-nav">
        <div className="top-function-name">
          <div className="rectangle"></div>
        <p id={content._id} className="function-name">{content.name}</p>
          <div className="text-banner"></div>
        </div>
        <div className="saved-elements-list">
          {content.contentArr.map(element =>
          <div key={element._id}>
              <p className="pointer" onClick={() => handleUpdateState(element._id, content.contentArr)} id={element._id}>{element.title}</p>
            <hr/>
          </div> 
          )}
          <div className="create-icon">
            <img src="/assets/add-icon.svg" alt="add" />
            <p>Create</p>
          </div>
        </div>
      </div>
      
      <Switch>
        <PrivateRoute path="/user/notes" >
          <Editor content={content.currentContent} />
        </PrivateRoute>
        <PrivateRoute path="/user/todos" >
          <Checklist content={content.currentContent} />
        </PrivateRoute>
        <PrivateRoute path="/user/links" >
          <Links content={content.currentContent} />
        </PrivateRoute>
        <PrivateRoute path="/user/gallery" >
          <Album content={content.currentContent} />
        </PrivateRoute>
      </Switch>
    </div>
  )
  // }
}

export default Nav