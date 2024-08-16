import React from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Resume = ({ data, config, profile }) => {

  return (
    <>
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title">
          <h2>{data.title}</h2>
          <p>{data.sectionDescription}</p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos-delay={100}>
              <h3 className="resume-title">{data.sumary.title}</h3>

              <div className="resume-item pb-0">
                <h4>{profile.fullname}</h4>
                <p>
                  <em>{data.sumary.description}</em>
                </p>
                <ul>
                  {data.sumary.listData.map((item, index) => (
                    <li>{item.value}</li>
                  ))}
                </ul>
              </div>

              {/* Edn Resume Item */}
              <h3 className="resume-title">{data.education.title}</h3>
              {data.education.registers.map((item, index) => (
                <div className="resume-item">
                  <h4>{item.title}</h4>
                  <h5>{item.period}</h5>
                  <p>
                    <em>{item.place}</em>
                  </p>
                  <p>{item.description}</p>
                </div>
              ))}
              {/* Edn Resume Item */}
            </div>

            {/*fin de la secion*/}
            <div className="col-lg-6" data-aos-delay={200}>
              <h3 className="resume-title">{data.experience.title}</h3>
              {data.experience.registers.map((item, index) => (
                <div className="resume-item">
                  <h4>{item.title}</h4>
                  <h5>{item.period}</h5>
                  <p>
                    <em>{item.rol}</em>
                  </p>
                  <ul>
                    {item.activities.map((item, index) => (
                      <li>{item.value}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Edn Resume Item */}
          </div>
        </div>
      </section>
      {/* /Resume Section */}
    </>
  );
};

export default Resume;
