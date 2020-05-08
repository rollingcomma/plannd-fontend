import React from 'react';

const FeatureContainer = (Component) => ({content}) => {
  debugger
  
  return (
    <div className="content">
      <div id="space-around-content" className="h-100"> 
        <div className="content-title"><p>{content.title}</p></div>
        <div className="date-created"><p>{content.created_at.substr(0,10)}</p></div>
        <hr />
        <div className="d-flex h-75">
          <Component content={content}></Component>
        </div>
      </div>
    </div>
  )
}

export default FeatureContainer