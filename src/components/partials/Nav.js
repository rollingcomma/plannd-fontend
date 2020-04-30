import React, { useState, useCallback } from 'react';
import ContentContainer from './ContentContainer'
// class Nav extends React.Component {
  // constructor() {
  //   // debugger
  //   super();
  // }
const Nav = (props) => {
    const {featureName, feature} = props
    // debugger
    const [content, setContent] = useState(feature.notebooks[0]);
    const handleUpdateState = useCallback((id, contentArr) => setContent(contentArr.filter(element=>element._id == id)),[content])

    return (
      <div className="d-flex flex-row">
        <div className="categories-nav">
          <div className="top-function-name">
            <div className="rectangle"></div>
            <p className="function-name">{featureName}</p>
            <div className="text-banner"></div>
          </div>
          <div className="saved-elements-list">
            {feature.notebooks.map(element =>
            <div>
              <a href="#" onClick={() => handleUpdateState(element._id, feature.notebooks)} id={element._id}>{element.title}</a>
              <hr/>
            </div> 
            )}
            <div className="create-icon">
              <img src="/assets/add-icon.svg" alt="add" />
              <p>Create</p>
            </div>
          </div>
        </div>

        <ContentContainer content={content} />
        
      </div>
    )
  }
// }

export default Nav