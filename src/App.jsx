import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Rooms from './components/Rooms/Rooms';
import Floor from './components/Floor/Floor';
import Foreninger from './components/Foreninger/Foreninger';
import Map from './components/Map/Map';

const contentfulClient = new ContentfulClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESSTOKEN,
});

export default function App() {
  return (
    <div className="App">
      <ContentfulProvider client={contentfulClient}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Rooms />
            </Route>
            <Route exact path="/:floor/:roomnumber">
              <Floor />
            </Route>
            <Route exact path="/kart">
              <Map />
            </Route>
            <Route exact path="/foreninger">
              <Foreninger />
            </Route>
            <Route exact path="/kantine">
              <embed
                src="https://www.sio.no/mat-og-drikke/_window/mat+og+drikke+-+dagens+middag?s=284"
                className="cantine"
              />
            </Route>
            <Route exact path="/kollektivt">
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
