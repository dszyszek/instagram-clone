import React from 'react';

import Navbar from './Navbar';
import MainContent from './MainContent';

import '../fontello/css/fontello.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainContent />
      </header>
    </div>
  );
}

export default App;
