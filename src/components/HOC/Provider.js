import React, {createContext, useReducer, useEffect} from 'react'
import {sessionStorageParser} from '../../helpers/parser'

debugger

const defaultUserState = sessionStorageParser(null)
export const UserContext = createContext(defaultUserState)
export const DispatchUserContext = createContext(undefined)

export const UserStateProvider =  ({children}) => {
  const [userState, dispatch] = useReducer(
    (userState, newValue) => {
      sessionStorageParser(newValue)
      
      return { ...userState, ...newValue }
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