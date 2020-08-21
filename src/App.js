import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Rooms from './components/Rooms/Rooms.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Floor1 from './components/Floor/Floor1.js';
import Floor2 from './components/Floor/Floor2.js';
import Floor3 from './components/Floor/Floor3.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/" exact>
          <Rooms/>
            <div className="Content"/>
          </Route>

          <Route path="/1etasje">
            <Floor1/>
          </Route>
          <Route path="/2etasje">
            <Floor2/>
          </Route>
          <Route path="/3etasje">
            <Floor3/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
