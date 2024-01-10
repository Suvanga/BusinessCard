import React, { useEffect } from 'react';
import './styles.css'; 
import'./Snowfall.css'
const Snowfall = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`; // Increase falling speed
      snowflake.style.opacity = Math.random() * 0.7 + 0.3; // Adjust opacity range
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 8000); // Increase snowflake duration
    };

    const interval = setInterval(createSnowflake, 100); // Increase snowflake creation frequency

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Snowfall;
