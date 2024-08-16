import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Typed from 'typed.js';

const Hero = ({ data, config }) => {
  const typedElement = useRef(null);

  const textDescriptionArray = data.profile.welcomeData.textDescription.map(
    (item) => item.value
  );
  useEffect(() => {
    const options = {
      strings: textDescriptionArray,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={config.profileBackgroud} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h2>{data.profile.welcomeData.title}</h2>
        <p>
          {data.profile.welcomeData.textStart} <span ref={typedElement}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
