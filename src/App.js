import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import { Switch,Route, Redirect } from 'react-router-dom';
import Practice from './Practice';
const App=()=> {
  return (
    <>
    <Practice/>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
