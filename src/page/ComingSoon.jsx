import React, { useState, useEffect } from 'react';
import { Timer, MessageCircle } from 'lucide-react';
import "./ComingSoon.css";

const ComingSoon = () =>{
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="time-unit">
      <div className="time-value">{value.toString().padStart(2, '0')}</div>
      <div className="time-label">{label}</div>
    </div>
  );

  return (
    <div className="coming-soon-container">
      <div className="logo-section">
        <Timer className="logo-icon" size={48} />
        <h1 className="title">Coming Soon</h1>
      </div>

      <div className="content">
        <p className="subtitle">
          Something amazing is in the works. Stay tuned!
        </p>

        <div className="countdown">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>

      <div className="launch-date">
        Launching April 1st, 2025
      </div>

      <a
        href="https://chat.whatsapp.com/your-group-link"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={24} />
        <span>Join our WhatsApp Community</span>
      </a>
    </div>
  );
}

export default ComingSoon;