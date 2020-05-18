import React, {useEffect, useCallback, useState, useRef} from 'react';
import { Switch, Route } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Routes from '../../services/Routes'
import Checklist from '../features/Checklist';
import Editor from '../features/Editor';
import Links from '../features/Links';
import Album from '../features/Album';
import Editable from '../shared/Editable';
import NotFound from '../features/NotFound';
import PrivateRoute from '../../services/PrivateRoute';
import { useUserState } from '../../context/customerHook';

const Nav = ({feature}) => {
  const [userState] = useUserState()
  const pins = userState.user.pins;
  const inputRef = useRef();
  
  const [content, setContent] = useState(
    { ...feature,
      currentContent: feature.contentArr.length > 0? feature.contentArr[0]:null
    });
  
  // const [contentArr, setContentArr] = useState({
  //   contentArr: content.contentArr
  // });  
  
  const [addFormState, setAddFormState] = useState({open:false})

  // const initialState = {}
  // if(content && content.contentArr.length > 0) content.contentArr.forEach(element => initialState[element.title] = true)
  
  // const [inputEditableState, setInputEditableState] = useState(initialState)

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
      setContent(
        {
          ...content,
          currentContent:arr[0]
        }
      )
    }
  }, [content.currentContent])

  // debugger
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
          <div key={element._id} className="my-2">
              <Editable
                text={element.title}
                childRef={inputRef}
                type="input"
                className="pointer"
                onClick={() => handleUpdateState(element._id, content.contentArr)}
              >
                <input
                  id={element._id}
                  ref={inputRef}
                  type="text"
                  name="contentArr"
                  value={element.title}
                  onChange={e => {
                    element.title = e.target.value;
                    setContent({ ...content, contentArr:content.contentArr })
                  }}
                />
              </Editable>
              {/* <p className="pointer" onClick={() => handleUpdateState(element._id, content.contentArr)} id={element._id}>{element.title}</p> */}
            <hr/>
          </div> 
          )}
          <div>
            {addFormState.open && 
              <form>
                <div className="form-group">
                  <input type="text" name="title"/> 
                </div>
                <input type="submit" className="btn btn-info"/>
              </form>}
          </div>
          <div className="create-icon">
            <button className="btn btn-link text-dark" onClick={()=> toggleAddFormHandler()}><img src="/assets/add-icon.svg" alt="add" />Create</button>
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
  // }
}

export default Nav