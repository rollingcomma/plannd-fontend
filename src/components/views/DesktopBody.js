/* eslint-disable jsx-a11y/alt-text*/
import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Nav from '../shared/Nav';
import PrivateRoute from '../../services/PrivateRoute';
import Dashboard from '../features/Dashboard';
import NotFound from '../features/NotFound';
  
const DesktopBody = ({data}) => {
    
    const [feature, setFeature] = useState(
      {
        name: "notes",
        _id: data.notes._id,
        contentArr: data.notes.notebooks
      }
    );

    const handleFeatureSwitch = (featureName) => {
      switch (featureName) {
        case "notes":
          setFeature({
            name: "notes",
            _id: data.notes._id,
            contentArr: data.notes.notebooks
          });
          return;
        case "todos":
          setFeature({
            name: "todos",
            _id: data.todos._id,
            contentArr: data.todos.checklists
          });
          return;
        case "links":
          setFeature({
            name: "links",
            _id: data.links._id,
            contentArr: data.links.categories
          });
          return;
        case "gallery":
          setFeature({
            name: "gallery",
            _id: data.gallery._id,
            contentArr: data.gallery.albums
          });
         return;
        default:
          setFeature(null)
      }
    }

    // debugger
    return (
      <div className="app justify-content">
        <div className="side-nav">
          <Link to="/user/feature/notes" onClick={()=> handleFeatureSwitch("notes")}><img alt="" className="note-icon" src="/assets/note-icon.svg" /></Link>
          <Link to="/user/feature/todos" onClick={() => handleFeatureSwitch("todos")}><img alt="" className="todo-icon" src="/assets/checkbox-icon.svg" /></Link>
          <Link to="/user/feature/links" onClick={() => handleFeatureSwitch("links")}><img alt="" className="link-icon" src="/assets/link-icon.svg" /></Link>
          <Link to="/user/feature/gallery" onClick={() => handleFeatureSwitch("gallery")}><img alt="" className="image-icon" src="/assets/image-icon.svg" /></Link>
        </div>
        <Switch>
          <PrivateRoute path="/user/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/user/feature" >
            <Nav feature={feature}/>
          </PrivateRoute>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </div>
    )
  }

  export default DesktopBody