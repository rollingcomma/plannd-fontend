import React from 'react';
import { StateProvider } from './state-context';
import './index.scss';

import DesktopView from './components/views/DesktopView';

const App = (props) => {
  const initialState = {
    theme: { primary: 'green' }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };
  // return (
  //   <StateProvider initialState={initialState} reducer={reducer}>
  //     // App content ...
  //     <DesktopView />
  //   </StateProvider>
  // )
  return (
    <DesktopView />
  )
}

export default App
