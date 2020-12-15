import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Rooms from "./components/Rooms/Rooms.js";
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
  space: "6snc2jafxeoe",
  accessToken: "c04HbEMiIdY4Avdiqar0FvPkxwD-H_uCsb1NoVUnaAI",
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
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </ContentfulProvider>
    </div>
  );
}

export default App;
