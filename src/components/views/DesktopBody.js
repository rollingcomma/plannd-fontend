/* eslint-disable jsx-a11y/alt-text*/
import React, { useState, useEffect, useCallback } from 'react';

import Nav from '../shared/Nav'

  const DesktopBody = ({data}) => {
    
    const [feature, setFeature] = useState(
      {
        name: "notes",
        contentId: data.notes._id,
        contentArr:data.notes.notebooks
      });

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
      }
    }

    debugger
    return (
      <div className="app justify-content">
        <div className="side-nav">
          <a href="/notes" onClick={()=> handleFeatureSwitch("notes")}><img alt="" className="note-icon" src="/assets/note-icon.svg" /></a>
          <a href="/todos" onClick={()=> handleFeatureSwitch("todos")}><img alt="" className="todo-icon" src="/assets/checkbox-icon.svg" /></a>
          <a href="/links" onClick={()=> handleFeatureSwitch("links")}><img alt="" className="link-icon" src="/assets/link-icon.svg" /></a>
          <a href="/gallery" onClick={()=> handleFeatureSwitch("gallery")}><img alt="" className="image-icon" src="/assets/image-icon.svg" /></a>
        </div>
        <Nav feature={feature}></Nav>
      </div>
    )
  }


export default DesktopBody