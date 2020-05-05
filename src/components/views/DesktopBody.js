/* eslint-disable jsx-a11y/alt-text*/
import React, { useState } from 'react';
import { Link, Switch } from 'react-router-dom';
import Nav from '../shared/Nav'
import PrivateRoute from '../../services/PrivateRoute'
import Dashboard from '../features/Dashboard'
  const DesktopBody = ({data}) => {
    
    const [feature, setFeature] = useState(null);

    const handleFeatureSwitch = (featureName) => {
      switch (featureName) {
        case "notes":
          setFeature({
            name: "notes",
            contentId: data.notes._id,
            contentArr: data.notes.notebooks
          });
          return;
        case "todos":
          setFeature({
            name: "todos",
            contentId: data.todos._id,
            contentArr: data.todos.checklists
          });
          return;
        case "links":
          setFeature({
            name: "links",
            contentId: data.links._id,
            contentArr: data.links.categories
          });
          return;
        case "gallery":
          setFeature({
            name: "gallery",
            contentId: data.gallery._id,
            contentArr: data.gallery.albums
          });
         return;
        default:
          setFeature(null)
      }
    }

    //todo
    debugger
    return (
      <div className="app justify-content">
        <div className="side-nav">
          <Link to="/user/notes" onClick={()=> handleFeatureSwitch("notes")}><img alt="" className="note-icon" src="/assets/note-icon.svg" /></Link>
          <Link to="/user/todos" onClick={() => handleFeatureSwitch("todos")}><img alt="" className="todo-icon" src="/assets/checkbox-icon.svg" /></Link>
          <Link to="/user/links" onClick={() => handleFeatureSwitch("links")}><img alt="" className="link-icon" src="/assets/link-icon.svg" /></Link>
          <Link to="/user/gallery" onClick={() => handleFeatureSwitch("gallery")}><img alt="" className="image-icon" src="/assets/image-icon.svg" /></Link>
        </div>
        <Switch>
          <PrivateRoute path="/user/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute >
            <Nav feature={feature}/>
          </PrivateRoute>
        </Switch>
        {/* {feature?
          <Nav feature={feature}></Nav>:<Dashboard />
        } */}
      </div>
    )
  }

  export default DesktopBody