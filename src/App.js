import React from 'react';
import './App.css';
import GetLocation from './components/GetLocation';
import Mapped from './components/Mapped';

function App() {
  return (
    <div className="App">
      <GetLocation />
      <Mapped />
    </div>
  );
}

export default App;
