// EclipseCountdownTimer.js
import React, { useState, useEffect } from 'react';
import './EclipseCountdownTimer.css';

const EclipseCountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eclipseDate = new Date('April 8, 2024 15:06:03 GMT-0400').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = eclipseDate - now;
    
      const days = Math.max(Math.floor(timeDifference / (1000 * 60 * 60 * 24)), 0);
      const hours = Math.max(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
      const minutes = Math.max(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)), 0);
      const seconds = Math.max(Math.floor((timeDifference % (1000 * 60)) / 1000), 0);
    
      setCountdown({ days, hours, minutes, seconds });
    };
    
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="eclipse-countdown">
      <h2>Total Eclipse Countdown</h2>
      <p className="countdown-text">
        {countdown.days > 0 && (
          <>
            <span className="countdown-number">{countdown.days}</span>
            <span className="countdown-label">DAYS</span>
          </>
        )}
        {countdown.hours > 0 && (
          <>
            <span className="countdown-number">{countdown.hours}</span>
            <span className="countdown-label">HOURS</span>
          </>
        )}
        {countdown.minutes > 0 && (
          <>
            <span className="countdown-number">{countdown.minutes}</span>
            <span className="countdown-label">MINUTES</span>
          </>
        )}
        {countdown.seconds > 0 && (
          <>
            <span className="countdown-number">{countdown.seconds}</span>
            <span className="countdown-label">SECONDS</span>
          </>
        )}
        {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 && (
          <>
            <span className="countdown-number">0</span>
            <span className="countdown-label">SECONDS</span>
          </>
        )}
      </p>
      <img
        src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,q_75/v1/clients/indy/Eclipse_Map2024_10377fac-39b6-40fa-ab78-52b2e1d8e028.png"
        alt="Eclipse Map"
        className="eclipse-image"
      />
    </div>
  );
};

export default EclipseCountdownTimer;
