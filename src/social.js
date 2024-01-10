import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './styles.css'; 
const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <a
        className="social__icon--link"
        href="https://www.facebook.com/suvanga.dhz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="social__icon--link"
        href="https://www.instagram.com/suvanga_d/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className="social__icon--link"
        href="https://www.youtube.com/@suvangadhz2126"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a
        className="social__icon--link"
        href="https://twitter.com/Suvanga_222"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className="social__icon--link"
        href="https://www.linkedin.com/in/sdhakal8/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
