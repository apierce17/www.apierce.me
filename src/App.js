import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import WpAdmin from './components/pages/WpAdmin'
import PrivacyPolicy from './components/pages/Privacy-Policy';
import ScrollToTop from './components/Misc/ScrollToTop';

import "./components/Misc/Fonts.css"
import './App.css';

function App() {

  return (
    <Router>
      <ScrollToTop />
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home Home={Home}/>
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy PrivacyPolicy={PrivacyPolicy}/>
          </Route>
          <Route exact path="/wp-admin">
            <WpAdmin WpAdmin={WpAdmin}/>
          </Route>
          <Redirect to="/"/>
        </Switch>
        <Footer />
    </Router>
  );
};

export default App;
