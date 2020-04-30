import React, {Component} from 'react';
import Editor from './Editor'
// const contentContainer = (Component, selectState) => {
  // class ContentContainer extends React.Component {
  //   constructor() {
  //     // debugger
  //     super();
  //   }

  //   render() {
      // const {content} = selectState(this.context)
    const ContentContainer = (props) => {
      const {featureId, content} = props
      // content = props.note
      // debugger
      return (
        <div className="content">
          <div id="space-around-content">
            <div className="content-title"><p>{content.title}</p></div>
            <div className="date-created"><p>{content.created_at.substr(0, 10)}</p></div>
            <hr />
            <div className="content-text">
              <Editor featureId={featureId} content={content.note}></Editor>
            </div>
          </div>
        </div>
      )
    }
  // }

  // ContentContainer.contextType = StateContext
  // return ContentContainer
// }

export default ContentContainer