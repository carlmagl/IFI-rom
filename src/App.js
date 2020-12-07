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
import Floor1 from "./components/Floor/Floor1.js";
import Floor2 from "./components/Floor/Floor2.js";
import Floor3 from "./components/Floor/Floor3.js";
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
            <Route path="/" exact>
              <Rooms />
            </Route>
            <Route path="/1etasje/:roomnumber" exact>
              <Floor1 />
            </Route>
            <Route path="/2etasje/:roomnumber" exact>
              <Floor2 />
            </Route>
            <Route path="/3etasje/:roomnumber" exact>
              <Floor3 />
            </Route>
            <Route path="/kart" exact>
              <Map />
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
