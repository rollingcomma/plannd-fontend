/* eslint-disable jsx-a11y/alt-text*/
import React, { useState } from 'react';
import Menu from '../partials/Menu'
import Nav from '../partials/Nav'
import Content from '../partials/ContentContainer'
import {data} from '../../services/data'

// class DesktopBody extends React.Component {
//   constructor(feature) {
//     // debugger
//     super();
//     this.state = {
//       feature: note
//     }
//   }
  
//   render() {
  const DesktopBody = (props) => {
    // console.log(note)
    
    return (
      <div className="app justify-content">
        <Menu></Menu>
        <Nav featureName="Notes" feature={data.note}></Nav>
      </div>
    )
  }
// }

export default DesktopBody