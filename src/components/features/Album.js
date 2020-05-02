import React from 'react'
import FeatureContainer from '../HOC/FeatureContainer';

class Album extends React.Component {

  render() {

    return (
      <div>
        <h5> I'm a block of albums</h5>
        <p>{JSON.stringify(this.props)}</p>
      </div >
    )
  }
}

export default FeatureContainer(Album)