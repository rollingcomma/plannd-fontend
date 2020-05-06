import React from 'react'
import FeatureContainer from '../HOC/FeatureContainer';

const Checklist = (props) => {
  debugger
  return (
    <div>
      <h5> I'm a block of checklist</h5>
      <p>{JSON.stringify(props)}</p>
    </div >
  )
}

export default FeatureContainer(Checklist)