import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Rooms from "./components/Rooms/Rooms.js";
import Events from "./components/Events/Events.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Floor from "./components/Floor/Floor.js";
import Foreninger from "./components/Foreninger/Foreninger.js";
import Map from "./components/Map/Map.js";
import { ContentfulClient, ContentfulProvider } from "react-contentful";

const contentfulClient = new ContentfulClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESSTOKEN,
});

function App() {
  return (
    <div className="App">
      <ContentfulProvider client={contentfulClient}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Rooms />
            </Route>
            <Route path="/:floor/:roomnumber">
              <Floor />
            </Route>
            <Route path="/kart">
              <Map />
            </Route>
            <Route path="/foreninger">
              <Foreninger />
            </Route>
            <Route path="/eventer">
              <Events />
            </Route>
            <Route path="/kollektivt">
              <embed
                src="https://mon.ruter.no/departures/59.943756-10.721023"
                className="ruter"
              />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </ContentfulProvider>
    </div>
  );
}

export default App;
