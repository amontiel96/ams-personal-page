import React from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = ({ data, config }) => {
  
  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={data.imgSection} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>{data.titleRol}</h2>
            <p className="fst-italic py-3">{data.descriptionRol}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {data.firstDataList.map((item, index) => (
                    <li key={index}>
                      <i className={item.icon}></i>{' '}
                      <strong>{item.label}:</strong> <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {data.secondDataList.map((item, index) => (
                    <li key={index}>
                      <i className={item.icon}></i>{' '}
                      <strong>{item.label}:</strong> <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="py-1">"{data.phrase}"</p>
            <p className="py-3">{data.sortDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
