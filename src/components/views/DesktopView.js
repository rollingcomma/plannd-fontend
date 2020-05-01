/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import DesktopBody from './DesktopBody';
import {data} from '../../services/data'

class DesktopView extends React.Component {
  
  render() {
    return (
      <div>
        <Header user={data.user} />
        <DesktopBody data={data}/>
        <Footer/>
      </div>
    )
  }
}

export default DesktopView