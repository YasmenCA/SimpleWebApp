// src/App.js
import React, { useState } from 'react';
import Button from './Button';
import './App.css'; // Import the main CSS file

function App() {
  const [count, setCount] = useState(0); // Initialize state

  const handleClick = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Hover and Tap the Increment</h1>
      <p className="app-count">Count: {count}</p>
      <Button label="Increment" onClick={handleClick} />
    </div>
  );
}

export default App;
