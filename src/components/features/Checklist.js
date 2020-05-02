import React from 'react'
import ContentContainer from '../HOC/FeatureContainer';

class Checklist extends React.Component {

  render() {

    return (
      <div>
        <h5> I'm a block of checklist</h5>
        <p>{JSON.stringify(this.props)}</p>
      </div >
    )
  }
}

export default Checklist