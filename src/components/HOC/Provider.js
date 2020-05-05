import React, {createContext, useReducer} from 'react'

export const StateContext = React.createContext({})
export const StateProvider = ({ children, store }) =>
  <StateContext.Provider value={store}>{children}</StateContext.Provider>

const defaultUserState = {isLoggedIn: false, user:null};
export const UserContext = createContext(defaultUserState)
export const DispatchUserContext = React.createContext(undefined)
export const UserStateProvider =  ({children}) => {
  const [userState, dispatch] = useReducer(
    (userState, newValue) => ({ ...userState, ...newValue }),
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