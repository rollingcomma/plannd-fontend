/* eslint-disable jsx-a11y/alt-text*/
import React, {useContext} from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import IndexHeader from '../shared/IndexHeader';
import DesktopBody from '../views/DesktopBody';
import RoutesIndex from '../../services/RoutesIndex';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserStateProvider} from '../HOC/Provider';
// import { initStore } from '../../store/store'
import useUserState from '../../helpers/customerHook';
// import RoutesIndex from '../../services/RoutesIndex';
// const store = initStore()
import { useHistory } from 'react-router-dom'
import {data} from '../../store/data'
const DesktopView = (props) => {
  const [userState, dispatch] = useUserState();
  
  debugger
  const history = useHistory()
  if (userState.isLoggedIn) {
    return (
      <UserStateProvider>
        <Header user={data.user}/>
        <DesktopBody data={data}/>
        <Footer />
      </UserStateProvider >
    )
  } else {
    history.push('/login')
    return (
      <UserStateProvider>
        <IndexHeader />
        <Router>
          <RoutesIndex/>
        </Router>
        <Footer />
      </UserStateProvider >
    )
  }
}


export default DesktopView