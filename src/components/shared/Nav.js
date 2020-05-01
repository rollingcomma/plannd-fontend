import React, { useState, useCallback } from 'react';
// import Editor from '../features/Editor'
// import Links from '../features/Links'
// import Album from '../features/Album'
// import Checklist from '../features/Checklist'
import { StateContext } from '../HOC/state-context';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../services/Routes';

const Nav = ({feature}) => {
  
  const [content, setContent] = useState(feature.contentArr[0]);
  
  const handleUpdateState = useCallback((id, contentArr) => { 
    const arr = contentArr.filter(element => element._id === id)
    if (arr.length === 1) { 
      setContent(arr[0])
    }
  },[content])
  
  debugger
  return (
    <div className="d-flex flex-row w-75">
        <div className="categories-nav">
          <div className="top-function-name">
            <div className="rectangle"></div>
          <p id={feature.content._id} className="function-name">{feature.name}</p>
            <div className="text-banner"></div>
          </div>
          <div className="saved-elements-list">
            {feature.contentArr.map(element =>
            <div key={element._id}>
                <p className="pointer" onClick={() => handleUpdateState(element._id, feature.contentArr)} id={element._id}>{element.title}</p>
              <hr/>
            </div> 
            )}
            <div className="create-icon">
              <img src="/assets/add-icon.svg" alt="add" />
              <p>Create</p>
            </div>
          </div>
        </div>
      {/* <StateContext.Provider value={content}> */}
        <Router>
          <Routes content={content}/>
        </Router>
      {/* </StateContext.Provider> */}
    </div>
  )
}


export default Nav