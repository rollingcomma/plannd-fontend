import React from 'react';
// import Editor from '../partials/Editor'
import {StateContext} from './state-context'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../services/Routes';

const FeatureContainer = ({content}) => {
      // const { content } = props
      debugger
      return (
        <div className="content">
          {/* <StateContext.Consumer>
            {content =>   */}
              <div id="space-around-content"> 
                <div className="content-title"><p>{content.title}</p></div>
                <div className="date-created"><p>{content.created_at.substr(0,10)}</p></div>
                <hr />
                <div className="content-text">
                <Router>
                  <Routes content={content} />
                </Router>
                </div>
              </div>
            {/* }
          </StateContext.Consumer>  */}
        </div>
       
      )
    // }
  }

  // ContentContainer.contextType = StateContext
  // return ContentContainer
// }

export default FeatureContainer