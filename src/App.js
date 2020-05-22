import React from 'react';
import './index.scss';
import Footer from './components/shared/Footer';
import Routes from './services/Routes';
import { UserStateProvider, WindowDimensionsProvider } from './context/Provider';
import { useWindowDimensions } from './context/customerHook';
// import DesktopView from './components/views/DesktopView';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  // const { width } = useWindowDimensions();

  return (
    <UserStateProvider>
      <WindowDimensionsProvider>
        <Router>
          <Routes />
        </Router>
      </WindowDimensionsProvider>
    </UserStateProvider >
  )
  
}

export default App
