import React, { useEffect, useState } from "react";
import icon1 from '../design/images/icon-facebook.svg'
import icon2 from '../design/images/icon-instagram.svg'
import icon3 from '../design/images/icon-pinterest.svg'
import './App.css'

const Timer = () => {
  const [currentTime, setCurrenctTIme] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrenctTIme(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const FormatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const hours = FormatTime(currentTime.getHours());
  const minutes = FormatTime(currentTime.getMinutes());
  const seconds = FormatTime(currentTime.getSeconds());

  return (
    <div className="clock-container">
      <h1>Current Time</h1>
      <p className="clock-timer">{`${hours}:${minutes}:${seconds}`}</p>
      <div className="icons">
        <img src={icon1}/>
        <img src={icon2}/>
        <img src={icon3}/>
      </div>
    </div>
  );
};

export default Timer;
