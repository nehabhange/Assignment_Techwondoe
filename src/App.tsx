import React from 'react';
import logo from './logo.svg';
// import './App.css';

import Navbar from "./section/Navbar"
import Header from './section/Header';
import Section1 from './section/Section1'
import Section2 from './section/Section2'
import Section3 from './section/Section3'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>

      
    </div>
  );
}

export default App;
