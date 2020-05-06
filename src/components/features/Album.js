import React from 'react'
import FeatureContainer from '../HOC/FeatureContainer';

const Album = (props) => {
  debugger
  return (
    <div>
      <h5> I'm a block of albums</h5>
      <p>{JSON.stringify(props)}</p>
    </div >
  )
}

export default FeatureContainer(Album)