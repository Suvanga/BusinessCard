import React from 'react';
import './styles.css'
const handleButtonClick = () => {
  window.open('https://suvanga.github.io/images/Suvanga%20Dhakal%20Resume.pdf', '_blank');
};

const ResumeButton = () => {
  return (
    <button className="main__btn" onClick={handleButtonClick}>
      Resume
    </button>
  );
};

export default ResumeButton;
