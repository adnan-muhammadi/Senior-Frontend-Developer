// src/AnalogClock.js
import React from 'react';
import './AnalogClock.css';

const AnalogClock = ({ currentTime }) => {
  const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondDeg = (360 / 60) * seconds;

  return (
    <div className="clock">
      <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
      <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
      <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      <div className="center"></div>
    </div>
  );
};

export default AnalogClock;
