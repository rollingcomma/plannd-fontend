import {useContext} from 'react'
import {UserContext, DispatchUserContext} from '../components/HOC/Provider';

const useUserState = () => [
  useContext(UserContext),
  useContext(DispatchUserContext)
];

export default useUserState;