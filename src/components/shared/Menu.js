import React from 'react';

class Menu extends React.Component {
  // constructor() {
  //   // debugger
  //   super();
  // }

  render() {
    return (
      <div className="side-nav">
        <a><img alt=""  className="note-icon" src="/assets/image-icon.svg" /></a>
        <a><img alt="" className="todo-icon" src="/assets/checkbox-icon.svg" /></a>
        <a><img alt="" className="link-icon" src="/assets/link-icon.svg" /></a>
        <a><img alt="" className="image-icon" src="/assets/image-icon.svg" /></a>
      </div>
    )
  }
}

export default Menu