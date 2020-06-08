import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./mraul.jpeg')} className="eu" alt="ass" />
        <div>
          Raul Nicu Mogos
        </div>
        <div>
          <a href="https://github.com/raulmogos" > github </a>
        </div>
      </header>
    </div>
  );
}

export default App;
