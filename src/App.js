import React from 'react';
import './index.scss';
import Footer from './components/shared/Footer';
import Routes from './services/Routes';
import { UserStateProvider, ProjectsStateProvider } from './context/Provider';
// import DesktopView from './components/views/DesktopView';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  // const initialState = {
  //   theme: { primary: 'green' }
  // };

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'changeTheme':
  //       return {
  //         ...state,
  //         theme: action.newTheme
  //       };

  //     default:
  //       return state;
  //   }
  // };
  // return (
  //   <StateProvider initialState={initialState} reducer={reducer}>
  //     // App content ...
  //     <DesktopView />
  //   </StateProvider>
  // )

  return (
    <UserStateProvider>
      <ProjectsStateProvider>
        <Router>
          <Routes />
        </Router>
        <Footer />
      </ProjectsStateProvider>  
    </UserStateProvider >
  )
  
}

export default App
