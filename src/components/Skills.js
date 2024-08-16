import React, { useState, useEffect } from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Skills = ({ data, config, profile }) => {
  return (
    <>
      <section id="skills" className="skills section light-background">
        {/* Section Title */}
        <div className="container section-title">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos-delay={100}>
          <div className="row skills-content skills-animation">
            {/* primera seccion lenguajes*/}
            <div className="col-lg-3">
              {data.languages.map((item, index) => (
                <div className="progress">
                  <span className="skill">
                    <span>{item.name}</span>{' '}
                    <i className="val">{item.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* segunda seccion bases de datos*/}
            <div className="col-lg-3">
              {data.db.map((item, index) => (
                <div className="progress">
                  <span className="skill">
                    <span>{item.name}</span>{' '}
                    <i className="val">{item.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* tercera seccion herramientas*/}
            <div className="col-lg-3">
              {data.tools.map((item, index) => (
                <div className="progress">
                  <span className="skill">
                    <span>{item.name}</span>{' '}
                    <i className="val">{item.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* cuarta seccion patrones de diseño*/}
            <div className="col-lg-3">
              {data.extra.map((item, index) => (
                <div className="progress">
                  <span className="skill">
                    <span>{item.name}</span>{' '}
                    <i className="val">{item.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={item.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* /Skills Section */}
    </>
  );
};

export default Skills;
