import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login';
import Register from '../components/features/Register';
import IndexHeader from '../components/shared/IndexHeader';
import PrivateRoute from './PrivateRoute'
import PrivateView from '../components/views/PrivateView';
import NotFound from '../components/features/NotFound';
import Footer from '../components/shared/Footer'
import IndexFooter from '../components/shared/IndexFooter'
import About from '../components/features/About'
import QandA from '../components/features/QandA'

import { useUserState, useWindowDimensions } from '../context/customerHook';

const Routes = () => {
  const {width} = useWindowDimensions()
  const [userState] = useUserState();
  
  return (
    <Switch>
      <Route path="/register">
        <div className="body-container">
        <IndexHeader />
        <Register width={width}/>
        </div>
        <IndexFooter />
      </Route>
      <Route exact path={["/", "/login"]}>
        <div className="body-container">
          <IndexHeader />
          <Login width={width}/>
        </div>
         <IndexFooter />
      </Route>
      <PrivateRoute path="/user">
        <PrivateView className={`body-container ${userState && userState.user && userState.user.preference.theme}-primary`}/>
        {width>600 && <Footer />}
      </PrivateRoute>
      <Route path="/about">
        <IndexHeader />
        <About />
        <IndexFooter />
      </Route>
      <Route path="/qanda">
        <IndexHeader />
        <QandA />
        <IndexFooter />
      </Route>
      <Route>
        <IndexHeader />
        <NotFound />
        <IndexFooter />
      </Route>
    </Switch>
  )
}

export default Routes