import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar() {
  return (
    <List disablePadding dense>
      <ListItem button>
        <ListItemText><Link to="/user/feature/notes" onClick={() => handleFeatureSwitch("notes")}><img alt="" className={`note-icon ${pathname === "feature" || pathname === "notes" ? "filter-notes" : ""}`} src="/assets/note-icon.svg" />Note</Link></ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText><Link to="/user/feature/todos" onClick={() => handleFeatureSwitch("todos")}><img alt="" className={`todo-icon ${pathname === "todos" ? "filter-todos" : ""}`} src="/assets/checkbox-icon.svg" />Todos</Link></ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText><Link to="/user/feature/links" onClick={() => handleFeatureSwitch("links")}><img alt="" className={`link-icon ${pathname === "links" ? "filter-links" : ""}`} src="/assets/link-icon.svg" />Links</Link></ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText><Link to="/user/feature/gallery" onClick={() => handleFeatureSwitch("gallery")}><img alt="" className={`image-icon ${pathname === "gallery" ? "filter-gallery" : ""}`} src="/assets/image-icon.svg" />Gallery</Link></ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText><Link className="dropdown-item" to="/user/profile"><img alt="" src="/assets/gear.png" className="icon-small" />Profile Setting</Link></ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText><Link className="dropdown-item" to="/login" onClick={() => handleLogout()}><img alt="" src="/assets/signs.png" className="icon-small" />Log Out</Link></ListItemText>
      </ListItem>
    </List>
  )
}

export default Sidebar