import {useContext, useState, useEffect} from 'react'
import {UserContext, DispatchUserContext} from '../components/HOC/Provider';

export const useUserState = () => [
  useContext(UserContext),
  useContext(DispatchUserContext)
];

export const useSessionStorage = (keyArr) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      // let storage = {}
      if(keyArr)
        keyArr.forEach(key => {
          const item = window.sessionStorage.getItem(key);
          storedValue[key] = item ? JSON.parse(item) : null;
        })
      return storedValue
      // Parse stored json or if none return initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return null;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = values => {
    try {
      // Allow value to be a function so we have same API as useState
      for(const key of Object.keys(values)) {
        const valueToStore =
          values[key] instanceof Function ? values[key](storedValue) : values[key];
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
