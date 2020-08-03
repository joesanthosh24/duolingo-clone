import React from 'react';

import './App.css';

import MainContent from './components/landing-main/landing-main.component';
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
