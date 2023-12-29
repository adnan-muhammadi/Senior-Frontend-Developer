// src/App.js
import React, { useEffect, useState } from 'react';
import AnalogClock from './AnalogClock';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <AnalogClock currentTime={currentTime} />
    </div>
  );
}

export default App;
