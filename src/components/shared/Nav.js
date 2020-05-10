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
          {content.contentArr && 
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
        <PrivateRoute path="/user/feature/notes" >
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