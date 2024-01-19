import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(timerInterval);
  }, [targetDate]);

  return (
    <div>
      {timeLeft.days > 0 && <p>{timeLeft.days} days</p>}
      {timeLeft.hours > 0 && <p>{timeLeft.hours} hours</p>}
      {timeLeft.minutes > 0 && <p>{timeLeft.minutes} minutes</p>}
      {timeLeft.seconds > 0 && <p>{timeLeft.seconds} seconds</p>}
      {Object.keys(timeLeft).length === 0 && <p>Countdown expired!</p>}
    </div>
  );
};

export default CountdownTimer;
