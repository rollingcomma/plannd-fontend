import React, {createContext, useReducer, useEffect} from 'react'
import {sessionStorageParser} from '../helpers/parser'

const defaultUserState = sessionStorageParser()
export const UserContext = createContext(defaultUserState)
export const DispatchUserContext = createContext(undefined)

export const UserStateProvider =  ({children}) => {
  const [userState, dispatchUser] = useReducer(
    (userState, newValue) => {
      sessionStorageParser(newValue)
      return { ...userState, ...newValue }
    },
    defaultUserState
  );

  return (
    <UserContext.Provider value={userState}>
      <DispatchUserContext.Provider value={dispatchUser}>
        {children}
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
}

const defaultProjectState = sessionStorageParser()
export const ProjectsContext = createContext(defaultProjectState)
export const DispatchProjectsContext = createContext(undefined)

export const ProjectsStateProvider = ({children}) => {
  const [projectsState, dispatchProject] = useReducer(
    (projectsState, newValue) => {
      sessionStorageParser(newValue)
      return {...projectsState, ...newValue}
    },
    defaultProjectState
  );
  return(
    <ProjectsContext.Provider value={projectsState}>
      <DispatchProjectsContext.Provider value={dispatchProject}>
        {children}
      </DispatchProjectsContext.Provider>
    </ProjectsContext.Provider>
  )
}
// export default Provider