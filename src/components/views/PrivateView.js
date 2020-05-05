/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Header from '../shared/Header';
import DesktopBody from './DesktopBody';
import { UserStateProvider } from '../HOC/Provider';
// import { initStore } from '../../store/store'
import { data } from '../../store/data'

const PrivateView = () => {
  debugger

  return (
    <UserStateProvider>
      <Header user={data.user} />
      <DesktopBody data={data} />
    </UserStateProvider >
  )
}
export default PrivateView
