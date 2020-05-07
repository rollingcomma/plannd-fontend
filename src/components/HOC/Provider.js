import React, {createContext, useReducer, useEffect} from 'react'
import {useLocalStorage} from '../../helpers/customerHook'
import { checkLoggedIn } from '../../services/apiAction'

export const StateContext = React.createContext({})
export const StateProvider = ({ children, store }) =>
  <StateContext.Provider value={store}>{children}</StateContext.Provider>

// const [isLoggedIn, setIsLoggedIn] = useLocalStorage(isLoggedIn, false)
// const [user, setUser] = useLocalStorage(user, null)
const initialState = () => {
  if (!window.localStorage.getItem('isLoggedIn')) {
    // useEffect(() => {
    checkLoggedIn()
      .then(res => {
        debugger
        const user = res.data
        if (user.auth) {
          window.localStorage.setItem('isLoggedIn', true)
          window.localStorage.setItem('user', user.userId)
          // dispatch({
          //   isLoggedIn: true,
          //   user: user
          // })
        }
        // else {
        //   window.localStorage.setItem('isLoggedIn', false)
        //   window.localStorage.setItem('user', null)
        // }
      })
      .catch(err => {
        console.log(err.message)
      })
    }
}


const defaultUserState = { 
  'isLoggedIn': window.localStorage.getItem('isLoggedIn'), 
  "user": window.localStorage.getItem('user')};

export const UserContext = createContext(null)
export const DispatchUserContext = React.createContext(undefined)

export const UserStateProvider =  ({children}) => {
  debugger
  const [userState, dispatch] = useReducer(
    (userState, newValue) => {
      debugger
      for (const key of Object.keys(newValue)){
        window.localStorage.setItem(key, newValue[key])
      }
      return {...userState, ...newValue}
    },
    defaultUserState
  );

  if (!window.localStorage.getItem('isLoggedIn')) {

    // useEffect(() => {
    checkLoggedIn()
      .then(res => {
        debugger
        const user = res.data
        if (user.auth) {
          // window.localStorage.setItem('isLoggedIn', true)
          // window.localStorage.setItem('user', user)
          dispatch({
            isLoggedIn: true,
            user: user.userId
          })
        }
        // else {
        //   window.localStorage.setItem('isLoggedIn', false)
        //   window.localStorage.setItem('user', null)
        // }
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  
  return (
    <UserContext.Provider value={userState}>
      <DispatchUserContext.Provider value={dispatch}>
        {children}
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
}

// export default Provider