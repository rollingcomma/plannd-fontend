import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Editor from '../components/features/Editor'
import Links from '../components/features/Links'
import Album from '../components/features/Album'
import Checklist from '../components/features/Checklist'

const Routes =(props) => {
  debugger
  return(
    <Switch>
      
      <Route path="/notes">
        <Editor content={props.content}/>
      </Route>
      <Route path="/todos">
        <Checklist content={props.content}/>
      </Route>
      <Route path="/links">
        <Links content={props.content}/>
      </Route>
      <Route path="/gallery">
        <Album content={props.content}/>
      </Route>
    </Switch> 
  )
}
export default Routes

