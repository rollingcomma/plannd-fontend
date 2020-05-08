import React, { useState, useEffect } from 'react'
import { ReactTinyLink } from 'react-tiny-link'
import FeatureContainer from '../HOC/FeatureContainer';

const Links = ({content}) => {
  debugger
  //props.content.links.map
  const [state, setState] = useState(content)

  useEffect(() => { setState({ ...content})},[content])
  
  return (
    <div className="d-flex flex-column overflow-auto ml-3">
      {state.links && state.links.map(element => 
        <div key={element._id} className="m-1"> 
          <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url={element.link}>
          </ReactTinyLink>
        </div>
      )}
      <div className="create-icon">
        <button className="btn btn-link text-dark"><img src="/assets/add-icon.svg" alt="add" />Create</button>
      </div>
    </div>
    
  )
}

export default FeatureContainer(Links)