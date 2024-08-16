import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { getDatabase, ref, set } from 'firebase/database';

import { generateUniqueIdWithTimestamp } from '../utils/utils';

const Contact = ({ data, config, profile }) => {
  const [formValues, setFormValues] = useState({
    subject: '',
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Estado para el loader
  const [notification, setNotification] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (value !== '') {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = () => {
    let validationErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (formValues[key].trim() === '') {
        validationErrors[key] = data.contactForm.error.label;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      sendMsg(formValues);
    }
  };

  function sendMsg(values) {
    setIsLoading(true);

    const uniqueId = generateUniqueIdWithTimestamp();
    const db = getDatabase();
    set(ref(db, 'messages/es/' + uniqueId), {
      values,
    })
      .then(() => {
        setIsLoading(false);
        setNotification({
          message: data.contactForm.submit.succes,
          type: 'success',
          duration: 5000, // La notificación desaparecerá después de 5 segundos
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setNotification({
          message: data.contactForm.submit.succes,
          type: 'error',
          duration: 5000, // La notificación desaparecerá después de 5 segundos
        });
      });

    setFormValues({
      message: '',
    });
  }

  function Notification({
    message,
    type = 'success',
    duration = 3000,
    onClose,
  }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return (
      <div className={`notification ${type}`}>
        <div className="card">
          <span>{message}</span>
        </div>
        <button
          onClick={() => {
            setVisible(false);
            onClose();
          }}
        >
          X
        </button>
      </div>
    );
  }

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div className="info-item d-flex" data-aos-delay={200}>
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>{profile.address.label}</h3>
                    <p>{profile.address.value}</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex" data-aos-delay={300}>
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>{profile.labelCall}</h3>
                    <p>{profile.phone}</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex" data-aos-delay={400}>
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>{profile.labelEmail}</h3>
                    <p>{profile.email}</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="download-wrap text-end" data-aos-delay={500}>
                  <a
                    href={config.cvPath}
                    download=""
                    className="btn btn-primary"
                  >
                    {data.labelDownload}
                  </a>
                </div>
                {/* */}
              </div>
            </div>

            <>
              <div className="col-lg-7">
                <div className="row gy-4 php-email-form">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      {data.contactForm.name.label}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name-field"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <p style={{ color: 'red' }}>{errors.name}</p>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      {data.contactForm.email.label}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <p style={{ color: 'red' }}>{errors.email}</p>
                    )}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      {data.contactForm.subject.label}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      value={formValues.subject}
                      onChange={handleChange}
                      required
                    />
                    {errors.subject && (
                      <p style={{ color: 'red' }}>{errors.subject}</p>
                    )}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      {data.contactForm.msg.label}
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      id="message-field"
                      defaultValue={''}
                      type="text"
                      value={formValues.message}
                      onChange={handleChange}
                      required
                    />
                    {errors.message && (
                      <p style={{ color: 'red' }}>{errors.message}</p>
                    )}
                  </div>
                  <div className="col-md-12 text-center">
                    <button
                      className="btn btn-primary"
                      onClick={handleSubmit}
                      disabled={isLoading} // Deshabilita el botón cuando el loader está activo
                    >
                      {isLoading
                        ? data.contactForm.submit.loading
                        : data.contactForm.submit.label}{' '}
                      {/* Cambia el texto cuando está cargando */}
                    </button>
                    {notification && (
                      <Notification
                        message={notification.message}
                        type={notification.type}
                        duration={notification.duration}
                        onClose={handleCloseNotification}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>

            {/* End Download Section */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </>
  );
};

export default Contact;
