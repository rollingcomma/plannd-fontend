import React, {createContext, useReducer, useEffect} from 'react'
// import {useLocalStorage} from '../../helpers/customerHook'

export const StateContext = React.createContext({})
export const StateProvider = ({ children, store }) =>
  <StateContext.Provider value={store}>{children}</StateContext.Provider>

const defaultUserState = { 
  'isLoggedIn': sessionStorage.getItem('isLoggedIn'), 
  "user": sessionStorage.getItem('user'),
  'projectId': sessionStorage.getItem('projectId')};

export const UserContext = createContext(defaultUserState)
export const DispatchUserContext = React.createContext(undefined)

export const UserStateProvider =  ({children}) => {
  debugger
  const [userState, dispatch] = useReducer(
    (userState, newValue) => {
      debugger
      for (const key of Object.keys(newValue)){
        sessionStorage.setItem(key, newValue[key])
      }
      return {...userState, ...newValue}
    },
    defaultUserState
  );

  return (
    <UserContext.Provider value={userState}>
      <DispatchUserContext.Provider value={dispatch}>
        {children}
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
}

// export default Provider