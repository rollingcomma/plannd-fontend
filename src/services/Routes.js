import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login'
import Register from '../components/features/Register'
import Editor from '../components/features/Editor'
import Links from '../components/features/Links'
import Album from '../components/features/Album'
import Checklist from '../components/features/Checklist'

const Routes =({content}) => {
  // debugger
  return(
    <Switch>
      
      <Route path="/notes">
        <Editor content={content}/>
      </Route>
      <Route path="/todos">
        <Checklist content={content}/>
      </Route>
      <Route path="/links">
        <Links content={content}/>
      </Route>
      <Route path="/gallery">
        <Album content={content}/>
      </Route>
      
    </Switch> 
  )
}
export default Routes

