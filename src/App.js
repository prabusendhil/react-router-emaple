import React, { Component } from 'react';
import {BrowserRouter as Router, Route,NavLink} from "react-router-dom";

import './App.css';
import Dashboard from './component/dashboard';
import Apps from './component/apps';
import Navications from './component/navigations';
class App extends Component {
  render(){
	  
	  return(
	  <Router>
	  <nav>
	  <ul>
	  <li><NavLink to="/">Dashboard</NavLink></li>
	  <li><NavLink to="/apps">Apps</NavLink></li>
	  <li><NavLink to="/navigations">Navigations</NavLink></li>
	  </ul>
	  
	  <Route exact path="/" component={Dashboard} />
	  <Route exact path="/apps" component={Apps} />
	  <Route exact path="/navigations" component={Navications} />
	  </nav>
	  </Router>
	  )
  }
}

export default App;
