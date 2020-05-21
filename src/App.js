import React from 'react';
import './index.scss';
import Footer from './components/shared/Footer';
import Routes from './services/Routes';
import { UserStateProvider, WindowDimensionsProvider } from './context/Provider';
// import DesktopView from './components/views/DesktopView';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <UserStateProvider>
      <WindowDimensionsProvider>
        <Router>
          <Routes />
        </Router>
        <Footer />
      </WindowDimensionsProvider>
    </UserStateProvider >
  )
  
}

export default App
