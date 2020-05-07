import React from 'react'
import { ReactTinyLink } from 'react-tiny-link'
import FeatureContainer from '../HOC/FeatureContainer';

const Links = (props) => {
  debugger
  //props.content.links.map
  return (
    <div>
      {props.content.link.map}
    </div>
    
  )
}

export default FeatureContainer(Links)