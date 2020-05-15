import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbtack } from '@fortawesome/free-solid-svg-icons'


const FeatureContainer = (Component) => ( ({content, pins}) => {
  
  if(pins) {
    for(const key of Object.keys(pins)) {
      if (content._id == pins[key])
        content.isPined = true
    }
  }

  return (
    <div className="content">
      <div id="space-around-content" className="h-100"> 
      { content.onDashboard?
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
            <button className="btn btn-link"><img src={content.isPined ?"/assets/pined.png" :"/assets/pin.png"} className="icon-small" alt="pin"/></button>
        </div>
      }
        <div className="date-created"><p>{content && content.created_at.substr(0,10)}</p></div>
        <hr />
        <div className="d-flex h-75">
          <Component content={content}></Component>
        </div>
      </div>
    </div>
  )
})

export default FeatureContainer