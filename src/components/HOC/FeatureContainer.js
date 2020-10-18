import React from 'react';

const FeatureContainer = (Component) => ( ({featureName, content, isPined, handlePinClick, toolbarTheme}) => {
  
  return (
    <div className="content">
      <div id="space-around-content" className="h-100"> 
      { content && content.onDashboard?
          <div className="dashboard-feature-title-container">
            <div className={"rectangle-" + content.name}></div>
            <div className="content-title d-flex justify-content-between">
              <p id={content._id} className="function-name">{content && content.title}</p>
              <p className="dashboard-feature-title mr-0">in {content.name}</p>
            </div>
          <div className={"text-banner-" + content.name}></div>
          
        </div>
        :
        <div className="content-title d-flex justify-content-between">
          <p>{content && content.title}</p>
            {content && (!content.onDashboard) && 
              <button className="btn btn-link pointer" 
                onClick={() => handlePinClick({ key: featureName, value: content._id })}>
                <img src={isPined?"/assets/pined.png" :"/assets/pin.png"} className="icon-small" alt="pin"/></button>}
        </div>
      }
        <div className="date-created"><p>{content && content.created_at.substr(0,10)}</p></div>
        <hr />
        <div className="d-flex h-75">
          <Component content={content} toolbarTheme={toolbarTheme}></Component>
        </div>
      </div>
    </div>
  )
})

export default FeatureContainer