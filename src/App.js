import React from 'react';
import './App.css';
import Startpage from './components/Startpage';
import Navigation from './components/Navigation';
import Battle from './components/Battle';
import Stats from './components/Stats';
import UploadImg from './components/UploadHamster';
import AllHamsters from './components/AllHamsters';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       
        <Router>

          <header>
            <Navigation />
            <Switch>
              <Route path ="/" exact> <Startpage/> </Route>
              {/* exact för att man ska slippa behöva tänka på vart i koden man lägger den */}
              <Route path ="/battle"> <Battle/> </Route>
              <Route path ="/stats"> <Stats/> </Route>
              <Route path ="/upload"> <UploadImg/> </Route>
              <Route path ="/allhamsters"> <AllHamsters/> </Route>
              
            </Switch>
          </header>
          

      </Router>
    </div>
  );
}

export default App;
