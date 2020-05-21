import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login';
import Register from '../components/features/Register';
import IndexHeader from '../components/shared/IndexHeader';
import PrivateRoute from './PrivateRoute'
import PrivateView from '../components/views/PrivateView';
import NotFound from '../components/features/NotFound';
import { useUserState, useWindowDimensions } from '../context/customerHook';

const Routes = () => {
  const {width} = useWindowDimensions()
  const [userState] = useUserState();
  // debugger
  return (
    <Switch>
      <Route path="/register">
        <div className="body-container">
        <IndexHeader />
        <Register width={width}/>
        </div>
      </Route>
      <Route exact path={["/", "/login"]}>
        <div className="body-container">
          <IndexHeader />
          <Login width={width}/>
        </div>
      </Route>
      <PrivateRoute path="/user">
        <PrivateView className={`body-container ${userState && userState.user && userState.user.preference.theme}-primary`}/>
      </PrivateRoute>
      <Route>
        <IndexHeader />
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes