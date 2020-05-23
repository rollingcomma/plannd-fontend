/* eslint-disable jsx-a11y/alt-text*/
import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useLocation } from 'react-router-dom';
import Nav from '../shared/Nav';
import PrivateRoute from '../../services/PrivateRoute';
import Dashboard from '../features/Dashboard';
import NotFound from '../features/NotFound';
import { getGallery, getNotes, getTodos, getLinks } from '../../services/apiAction'
import { useUserState } from '../../context/customerHook';

const DesktopView = () => {

  const [userState] = useUserState()
  const [feature, setFeature] = useState(null)
  const activeProjectId = userState.user.preference.activeProject
  let location = useLocation()
  const pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)

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

  
  return (
    <div className="app">
      <div className="side-nav">
        <Link to="/user/feature/notes" onClick={() => handleFeatureSwitch("notes")}><img alt="" className={`note-icon ${pathname === "feature" || pathname === "notes" ? "filter-notes" : ""}`} src="/assets/note-icon.svg" /></Link>
        <Link to="/user/feature/todos" onClick={() => handleFeatureSwitch("todos")}><img alt="" className={`todo-icon ${pathname === "todos" ? "filter-todos" : ""}`} src="/assets/checkbox-icon.svg" /></Link>
        <Link to="/user/feature/links" onClick={() => handleFeatureSwitch("links")}><img alt="" className={`link-icon ${pathname === "links" ? "filter-links" : ""}`} src="/assets/link-icon.svg" /></Link>
        <Link to="/user/feature/gallery" onClick={() => handleFeatureSwitch("gallery")}><img alt="" className={`image-icon ${pathname === "gallery" ? "filter-gallery" : ""}`} src="/assets/image-icon.svg" /></Link>
      </div>
      <Switch>
        <PrivateRoute path="/user/dashboard" >
          <Dashboard />
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