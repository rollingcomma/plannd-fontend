import React from 'react'
import { StateContext } from './Provider'

const connect = (Component, selectState) => {
  class Connect extends React.Component {
    
    constructor(props, context) {
      super(props);

      this.state = {
        slice: selectState(context.getState())
      }
      //when ever the state changed in store, this function will be fired
      context.subscribe(() => {
        const rootState = context.getState()
        this.setState({ slice: selectState(rootState) })
      })
    }

    render() {
      debugger
      const { dispatch } = this.context
      const { slice } = this.state
      return <Component {...slice} dispatch={dispatch}></Component>
    }
  }

  // Connect.contextType = StateContext
  return Connect
}

export default connect;