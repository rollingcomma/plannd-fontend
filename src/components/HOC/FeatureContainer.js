import React from 'react';

const FeatureContainer = (Component) => ({content}) => {
  debugger
  
  return (
    <div className="content">
      <div id="space-around-content" className="h-100"> 
        <div className="content-title d-flex justify-content-between"><p>{content && content.title}</p>
          <button className="btn btn-link"><img className="icon-small" src="/assets/push-pin.png"></img></button></div>
        <div className="date-created"><p>{content && content.created_at.substr(0,10)}</p></div>
        <hr />
        <div className="d-flex h-75">
          <Component content={content}></Component>
        </div>
      </div>
    </div>
  )
}

export default FeatureContainer