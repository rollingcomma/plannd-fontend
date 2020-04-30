/* eslint-disable jsx-a11y/alt-text*/
import React, { useState } from 'react';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import DesktopBody from './DesktopBody';
import {user} from '../../services/data'

class DesktopView extends React.Component {
  // constructor(feature) {
  //   // debugger
  //   super();
  //   this.state = {
  //    
  //   }
  // }

  render() {
    return (
      <div>
        <Header user={user} />
        <DesktopBody/>
        <Footer/>
      </div>
    )
  }
}

export default DesktopView