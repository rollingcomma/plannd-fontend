import {useContext} from 'react'
import {UserContext, DispatchUserContext} from './Provider';
// import {ProjectsContext, DispatchProjectsContext} from './Provider'

export const useUserState = () => [
  useContext(UserContext),
  useContext(DispatchUserContext)
];

// export const useProjectsState = () => [
//   useContext(ProjectsContext),
//   useContext(DispatchProjectsContext)
// ];


export default useUserState
