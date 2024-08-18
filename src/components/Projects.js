import React, { useState, useEffect } from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

import { writeEvent } from '../services/firebase_connection';
import { uniqueIdEvent } from '../utils/utils';

const Projects = ({ data, config, profile, languaje , sessionID}) => {
  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row gy-4 isotope-container" data-aos-delay={200}>
            {data.registers.map((item, index) => (
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img src={item.src} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      href={item.src}
                      title={item.previewText}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                      onClick={(e) => {
                        writeEvent(sessionID, uniqueIdEvent(), "clic preview of: "+item.description);
                       }}
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                    <Link
                      to={`/project-detail/${index}/${languaje}/${sessionID}`}
                      title={item.detailText}
                      className="details-link"
                      onClick={(e) => {
                        writeEvent(sessionID, uniqueIdEvent(), "clic details to navigate to: "+item.description);
                       }}
                    >
                      <i className="bi bi-link-45deg" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
