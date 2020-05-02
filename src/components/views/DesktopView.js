/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import IndexHeader from '../shared/IndexHeader';
import DesktopBody from '../views/DesktopBody';
import RoutesIndex from '../../services/RoutesIndex';
import { BrowserRouter as Router } from 'react-router-dom';
import {data} from '../../services/data'

const DesktopView = (props) => {

    // const isLoggedIn = props.isLoggedIn;
    debugger
  if (props.isLoggedIn) {
    return (
      <div>
        <Header user={data.user}/>
        <DesktopBody data={data}></DesktopBody>
        <Footer/>
      </div>
    )}
  return (
    <div>
      <IndexHeader />
      <Router>
        <RoutesIndex/>
      </Router>
      <Footer />
    </div>
  )
}


export default DesktopView