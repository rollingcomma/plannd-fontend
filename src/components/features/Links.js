import React from 'react'
import FeatureContainer from '../HOC/FeatureContainer';

const Links = (props) => {
  debugger
  return (
    <div>
    <h5> I'm a block of Links</h5>
      <p>{JSON.stringify(props)}</p>
    </div>
    
  )
}

export default FeatureContainer(Links)