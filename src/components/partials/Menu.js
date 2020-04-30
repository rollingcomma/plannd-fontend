import React from 'react';

class Menu extends React.Component {
  // constructor() {
  //   // debugger
  //   super();
  // }

  render() {
    return (
      <div className="side-nav">
        <img alt=""  className="note-icon" src="/assets/image-icon.svg" />
        <img alt=""  className="todo-icon" src="/assets/checkbox-icon.svg" />
        <img alt=""  className="link-icon" src="/assets/link-icon.svg" />
        <img alt=""  className="image-icon" src="/assets/image-icon.svg" />
      </div>
    )
  }
}

export default Menu