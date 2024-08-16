import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
import { Link } from 'react-router-dom';

const ProjectDetail = ({ data, config, profile, item }) => {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true, // Para que la animación se ejecute solo una vez
    });

    // Inicializar Swiper
    new Swiper('.init-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
    });
  }, []);

  return (
    <>
      <>
        {/* Page Title */}
        <div className="page-title dark-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">
              {data.registers[item].detail.title}
            </h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link
                    to="/"
                    title="Home"
                    className="active"
                    style={{ textDecoration: 'auto', color: '#149ddd' }}
                  >
                    {data.onBackText}
                  </Link>
                </li>
                <li className="current">{data.detailText}</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End Page Title */}
      </>

      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper init-swiper">
                <div className="swiper-wrapper align-items-center">
                  {data.registers[item].detail.images.map((item, index) => (
                    <div className="swiper-slide">
                      <img src={item.src} alt="" />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info" data-aos-delay={200}>
                <h3>{data.registers[item].detail.projectInfo.title}</h3>
                <ul>
                  <li>
                    <strong>
                      {data.registers[item].detail.projectInfo.category.label}
                    </strong>
                    : {data.registers[item].detail.projectInfo.category.value}
                  </li>
                  <li>
                    <strong>
                      {data.registers[item].detail.projectInfo.language.label}
                    </strong>
                    : {data.registers[item].detail.projectInfo.language.value}
                  </li>
                  <li>
                    <strong>
                      {
                        data.registers[item].detail.projectInfo.description
                          .label
                      }
                    </strong>
                    :{' '}
                    {data.registers[item].detail.projectInfo.description.value}
                  </li>

                  <div>
                    {data.registers?.[item]?.detail?.projectInfo?.git ? (
                      <li>
                        <div style={{ textAlign: 'right' }}>
                          <a
                            style={{ color: '#020202', fontSize: 25 }}
                            href={
                              data.registers?.[item]?.detail?.projectInfo.git
                            }
                            className="github"
                            target="_blank"
                            download="false"
                          >
                            <i className="bi bi-github" />
                          </a>
                        </div>
                      </li>
                    ) : (
                      <></>
                    )}
                  </div>
                </ul>
              </div>
              <div className="portfolio-description" data-aos-delay={300}>
                <h2>{data.registers[item].detail.additionalInfo.title}</h2>
                <p>{data.registers[item].detail.additionalInfo.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Portfolio Details Section */}
    </>
  );
};

export default ProjectDetail;
