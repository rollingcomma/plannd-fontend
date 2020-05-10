import React, { useEffect }  from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Login from '../components/features/Login';
import Register from '../components/features/Register';
import IndexHeader from '../components/shared/IndexHeader';
import PrivateRoute from './PrivateRoute'
import PrivateView from '../components/views/PrivateView';
import NotFound from '../components/features/NotFound';
import { useUserState } from '../helpers/customerHook';
import { checkLoggedIn } from '../services/apiAction';

const Routes = () => {

  const history = useHistory()
  const [userState, dispatch] = useUserState();
  useEffect(() => {
    if (!sessionStorage.getItem('isLoggedIn')) {
      checkLoggedIn()
      .then(res => {
        const user = res.data
        if (user.auth) {
          dispatch({
            isLoggedIn: true,
            user: user.user
          })
        }
        history.push("/user/dashboard")
      })
      .catch(err => {
        
      })
    }
  })

  return(
    <Switch>
      <Route exact path="/register">
        <div>
        <IndexHeader />
        <Register/>
        </div>
      </Route>
      <Route exact path= "/login">
         <div>
          <IndexHeader />
          <Login />
        </div>
      </Route>
      <Route exact path="/">
        {userState.isLoggedIn ?
          <Redirect to='/user/dashboard' /> :
          <Redirect to='/login' />
        }
      </Route>
      <PrivateRoute path="/user">
        <PrivateView />
      </PrivateRoute>
      <Route >
        <IndexHeader />
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes