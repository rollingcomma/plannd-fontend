import {useContext} from 'react'
import {UserContext, DispatchUserContext} from './Provider';
import { WindowDimensionsCtx} from './Provider'

export const useUserState = () => [
  useContext(UserContext),
  useContext(DispatchUserContext)
];

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsCtx)
}

// export const useProjectsState = () => [
//   useContext(ProjectsContext),
//   useContext(DispatchProjectsContext)
// ];


export default useUserState
