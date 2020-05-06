import data from './data'
import { createStore, combineReducers } from 'redux'

export function initStore() {

  const reducers = combineReducers({
    user: (state = [], action) => {
      debugger
      if (action.type === 'FETCH_USER') {
        return data.user
      } else {
        return state;
      }
    },
    project: (state = [], action) => {

      if (action.type === 'FETCH_PROJECT') {
        return data.project

      } else {
        return state;
      }
    },
    notes: (state = [], action) => {

      if (action.type === 'FETCH_NOTES') {
        return data.notes

      } else {
        return state;
      }
    },
    links: (state = [], action) => {

      if (action.type === 'FETCH_LINKS') {
        return data.links

      } else {
        return state;
      }
    },
    todos: (state = [], action) => {
      if (action.type === 'FETCH_TODOS') {
        return data.todos

      } else {
        return state;
      }
    },
    gallery: (state = [], action) => {

      if (action.type === 'FETCH_GALLERY') {
        return data.gallery

      } else {
        return state;
      }
    }
  })
  
  const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(reducers, reduxExtension);
  return store;
}