import React from 'react';
import './App.css';
import Nav from './Pages/Nav';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Service from './Pages/Service';
import Home from './Pages/Homepage';
import {BrowserRouter as router, Switch, Route, Router} from "react-router-dom";

function App() {
  return (
    <router>
    <div className="App">
      <Nav/>
      <Route path="/"component = {Home}/>
      <Route path ="/About" component ={About}/>
      <Route path ="/Shop" component ={Shop}/>
      <Route path ="/Service" component ={Service}/>
        </div>
        </router>
  );
}

export default App;
