import React, {createContext, useState, useEffect, useReducer} from 'react'
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


export const WindowDimensionsCtx = createContext(null)

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
})

export const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState(windowDims())
  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDims())
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  )
}




// const defaultThemeState = {
//   theme: "classic"
// }

// export const ThemeContext = createContext(defaultThemeState)
// export const DispatchThemeContext = createContext(undefined)

// export const ThemeStateProvider = ({children}) => {
//   const [themeState, dispatchTheme] = useReducer(
//     (themeState, newTheme) => {
//       sessionStorageParser(theme)
//       return {...themeState, ...newValue}
//     },
//     defaultProjectState
//   );
//   return(
//     <ProjectsContext.Provider value={projectsState}>
//       <DispatchProjectsContext.Provider value={dispatchProject}>
//         {children}
//       </DispatchProjectsContext.Provider>
//     </ProjectsContext.Provider>
//   )
// }
// export default Provider