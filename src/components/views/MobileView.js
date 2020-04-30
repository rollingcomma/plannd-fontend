import React, { useState } from 'react';

class MobileView extends React.Component {
  constructor(feature) {
    // debugger
    super();
    this.state = {
      username: username
    }
  }

  render() {
    return (
      <div className="app">
        <Menu></Menu>
        <Nav></Nav>
        <Content></Content>
      </div>
    )
  }
}

export default MobileView