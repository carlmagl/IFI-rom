import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Rooms from './components/Rooms/Rooms.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Rooms/>
        <div className="Content"/>
      <Footer/>
    </div>
  );
}

export default App;
