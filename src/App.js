import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Category from './Components/Category';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
   
     <Router > 
     <Header />
     <Switch> 
      <Route exact path="/" >
      <Dashboard />
      </Route>
      <Route exact path="/category" >
     <Category />
     </Route>
     </Switch>
     </Router>
     
    </div>
  );
}

export default App;
