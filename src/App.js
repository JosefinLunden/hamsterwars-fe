import React from 'react';
import './App.css';
import Startpage from './components/Startpage';
import Navigation from './components/Navigation';
import Battle from './components/Battle';
import Stats from './components/Stats';
import UploadImg from './components/UploadHamster';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       
        <Router>

          <header>
            <Navigation />
            <Switch>
              <Route path ="/" exact> <Startpage/> </Route>
              <Route path ="/battle/:id/:id2"> <Battle/> </Route>
              <Route path ="/battle"> <Battle/> </Route>
              <Route path ="/stats"> <Stats/> </Route>
              <Route path ="/upload"> <UploadImg/> </Route>
              
              
            </Switch>
          </header>
          

      </Router>
    </div>
  );
}

export default App;
