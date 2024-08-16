import React from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = ({ data, config, profile }) => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>{data.copyright.label1}</span>{' '}
            <strong className="px-1 sitename">{profile.fullname}</strong>{' '}
            <span>{data.copyright.label2}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
