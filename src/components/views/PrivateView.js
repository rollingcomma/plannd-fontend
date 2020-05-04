/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import HeaderContainer from '../shared/HeaderContainer';
import IndexHeader from '../shared/IndexHeader';
import DesktopBody from './DesktopBody';
import RoutesIndex from '../../services/RoutesIndex';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserStateProvider } from '../HOC/Provider';
// import { initStore } from '../../store/store'
import useUserState from '../../helpers/customerHook';
import { data } from '../../store/data'

const PrivateView = ({data}) => {
  // const [userState, dispatch] = useUserState();
  debugger
  // const history = useHistory()
  // const header = userState.isLoggedIn ? Header : IndexHeader
  return (
    <UserStateProvider>
      <Header user={data.user} />
      <DesktopBody data={data} />
      <Footer />
    </UserStateProvider >
  )
}
export default PrivateView
