import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
    <footer className="footer">
        <p className="social">
            <FontAwesomeIcon icon={faLinkedin} size="3x" onClick={() => window.open("https://www.linkedin.com/in/yi-tsun-chen-623492205/")}/>
            <FontAwesomeIcon icon={faGithub} size="3x" onClick={() => window.open("https://github.com/chentriangoes")}/>
            <FontAwesomeIcon icon={faInstagram} size="3x" onClick={() => window.open("https://www.instagram.com/chentriangle/")}/>
            <FontAwesomeIcon icon={faTwitter} size="3x" onClick={() => window.open("https://twitter.com/YiTsunChen2")}/>
            <FontAwesomeIcon icon={faFacebook} size="3x" onClick={() => window.open("https://www.facebook.com/Rockoozi")}/>
            <FontAwesomeIcon icon={faYoutube} size="3x" onClick={() => window.open("https://www.youtube.com/user/chentriangle")}/>
        </p>
      <p className='flex items-center justify-center'>Copyright &copy; 2022. All Rights Reserved</p>
    </footer>
  )
}
