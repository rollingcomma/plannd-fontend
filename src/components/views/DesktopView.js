/* eslint-disable jsx-a11y/alt-text*/
import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Nav from '../shared/Nav';
import PrivateRoute from '../../services/PrivateRoute';
import Dashboard from '../features/Dashboard';
import NotFound from '../features/NotFound';
import Profile from '../features/Profile';
import Project from '../features/Project';
import { logout, getGallery, getNotes, getTodos, getLinks } from '../../services/apiAction'
import { useUserState } from '../../context/customerHook';

const DesktopView = () => {

  const [userState, dispatchUser] = useUserState()
  const [hoverState, setHoverState] = useState(false);
  const [feature, setFeature] = useState(null);
  const history = useHistory();
  const activeProjectId = userState.user.preference.activeProject
  let location = useLocation()
  const pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)

  const handleLogout = () => {
    dispatchUser({
      isLoggedIn: false,
      projects: null,
      user: null
    })
    window.sessionStorage.clear()
    logout()
      .then(res => {
        history.push('/login')
      })
  }

  //handle page reload
  useEffect(() => {
    handleFeatureSwitch(pathname)

  }, [userState.user.preference.activeProject])

  
  const handleFeatureSwitch = (featureName) => {
    switch (featureName) {
      case "notes": {
        getNotes(activeProjectId)
          .then(res => {
            const notes = res.data.notes;
            if (notes)
              setFeature({
                name: "Notes",
                _id: notes._id,
                contentArr: notes.notebooks
              });
          })
          .catch(err => {
            console.log(err.message)
          })
        return;
      }
      case "todos": {
        getTodos(activeProjectId)
          .then(res => {
            const todos = res.data.todos;
            if (todos)
              setFeature({
                name: "To-Dos",
                _id: todos._id,
                contentArr: todos.checklists
              });
          })
          .catch(err => {
            console.log(err.message)
          })
        return;
      }

      case "links": {
        getLinks(activeProjectId)
          .then(res => {
            const links = res.data.links;
            if (links)
              setFeature({
                name: "Links",
                _id: links._id,
                contentArr: links.categories
              });
          })
          .catch(err => {
            console.log(err.message)
          })
        return;
      }
      case "gallery": {
        getGallery(activeProjectId)
          .then(res => {
            const gallery = res.data.gallery;
            if (gallery)
              setFeature({
                name: "Gallery",
                _id: gallery._id,
                contentArr: gallery.albums
              });
          })
          .catch(err => {
            console.log(err.message)
          })
        return;
      }
      default:
        setFeature(null)
    }
  }
  
  const sideMenu =
    <div className="side-nav text-overflow">
      <Link to="/user/dashboard" className="d-flex flex-row"><img alt="" src="/assets/dashboard-icon.svg" className={`icon-navbar mr-3 ${pathname === "dashboard" ? "filter-gallery" : ""}`} /> Dashboard</Link>
      <Link to="/user/feature/notes" className="d-flex flex-row" onClick={() => handleFeatureSwitch("notes")}><img alt="" className={`note-icon mr-3 ${pathname === "feature" || pathname === "notes" ? "filter-notes" : ""}`} src="/assets/note-icon.svg" /> Notes </Link>
      <Link to="/user/feature/todos" className="d-flex flex-row" onClick={() => handleFeatureSwitch("todos")}><img alt="" className={`todo-icon mr-3 ${pathname === "todos" ? "filter-todos" : ""}`} src="/assets/checkbox-icon.svg" /> Todos </Link>
      <Link to="/user/feature/links" className="d-flex flex-row" onClick={() => handleFeatureSwitch("links")}><img alt="" className={`link-icon mr-3 ${pathname === "links" ? "filter-links" : ""}`} src="/assets/link-icon.svg" /> Links </Link>
      <Link to="/user/feature/gallery" className="d-flex flex-row" onClick={() => handleFeatureSwitch("gallery")}><img alt="" className={`image-icon mr-3 ${pathname === "gallery" ? "filter-gallery" : ""}`} src="/assets/image-icon.svg" /> Gallery</Link>
      <Link to="/user/profile" className="d-flex flex-row"><img alt="" src="/assets/gear.png" className={`icon-navbar mr-3 ${pathname === "profile" ? "filter-todos" : ""}`}/> Setting</Link>
      <Link to="/login" className="d-flex flex-row" onClick={() => handleLogout()}><img alt="" src="/assets/signs.png" className="icon-navbar mr-3 " /> Log Out</Link>
      
    </div>
  
  return (
    <div className="app">
      <div 
        >
        { sideMenu }
      </div>
      <Switch>
        <PrivateRoute path="/user/dashboard" >
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path='/user/profile'>
          <Profile /> 
        </PrivateRoute>
        <PrivateRoute path='/user/project'>
          <Project />
        </PrivateRoute>
        <PrivateRoute path="/user/feature" >
          {feature && <Nav feature={feature} />}
        </PrivateRoute>
        <Route >
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default DesktopView