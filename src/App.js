import React from 'react';

import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Techs from './Components/Technologies/Technologies'
import Projects from './Components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Techs />
      <Projects />
    </div>
  );
}

export default App;
