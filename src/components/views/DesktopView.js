/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

import IndexHeader from '../shared/IndexHeader';
import DesktopBody from './DesktopBody';
import Routes from '../../services/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserStateProvider} from '../HOC/Provider';
// import { initStore } from '../../store/store'
import useUserState from '../../helpers/customerHook';


const DesktopView = ({component}) => {
  const [userState, dispatchUser] = useUserState();
  debugger
  // const history = useHistory()
  // const header = userState.isLoggedIn ? Header : IndexHeader
  return (
    <UserStateProvider>
     
      
    </UserStateProvider >
  )
}
export default DesktopView