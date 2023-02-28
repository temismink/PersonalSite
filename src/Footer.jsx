import React from 'react';
import './Footer.css'; // import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  // Function to handle clicking the "Return to top" arrow
  const handleReturnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer>
      <div className="return-to-top" onClick={handleReturnToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
      <div>
      <a href="https://github.com/temismink">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/samuel-minkov-temis-1b76441a9/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/temismink">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      </div>
      <div className="copyright">
        © 2023 SamuelMinkovTemis. All rights reserved.
      </div>
      {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}
      <p className='quote'>Site hits: 
      <a href="https://www.digits.net" target="_blank">
        <img src="https://counter.digits.net/?counter={5fd5a800-458e-0be4-4597-f8e28d168091}&template=simple" 
        alt="Hit Counter by Digits" border="0" margin-top='30' color='white' />
      </a>
      </p>
    </footer>
  );
}

export default Footer;