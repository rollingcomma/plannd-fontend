/* eslint-disable jsx-a11y/alt-text*/
import React, { useState, useEffect, useCallback } from 'react';

import Nav from '../shared/Nav'

  const DesktopBody = ({data}) => {
    
    const [feature, setFeature] = useState(
      {
        name: "notes",
        content: data.note,
        contentArr:data.note.notebooks
      });

    const handleFeatureSwitch = (featureName) => {
      switch (featureName) {
        case "notes":
          setFeature({
            name: "notes",
            content: data.note,
            contentArr: data.note.notebooks
          });
          return;
        case "todos":
          setFeature({
            name: "todos",
            content: data.todos,
            contentArr: data.todos.checklists
          });
          return;
        case "links":
          setFeature({
            name: "links",
            content: data.links,
            contentArr: data.links.categories
            
          });
          return;
        case "gallery":
          setFeature({
            name: "gallery",
            content: data.gallery,
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
          <a href="/note" onClick={()=> handleFeatureSwitch("notes")}><img alt="" className="note-icon" src="/assets/note-icon.svg" /></a>
          <a href="/todos" onClick={()=> handleFeatureSwitch("todos")}><img alt="" className="todo-icon" src="/assets/checkbox-icon.svg" /></a>
          <a href="/links" onClick={()=> handleFeatureSwitch("links")}><img alt="" className="link-icon" src="/assets/link-icon.svg" /></a>
          <a href="/gallery" onClick={()=> handleFeatureSwitch("gallery")}><img alt="" className="image-icon" src="/assets/image-icon.svg" /></a>
        </div>
        <Nav feature={feature}></Nav>
      </div>
    )
  }


export default DesktopBody