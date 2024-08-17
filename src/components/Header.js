import { useState, useEffect } from "react";
import "../index.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { initHeaderToggle } from "../assets/js/main_modularizado.js";
import {
  database,
  ref,
  onValue,
  set,
} from "../services/firebase_connection.js";

import {
  getRegisterDate,
  generateUniqueIdWithTimestamp,
} from "../utils/utils.js";

const Header = ({ data, config, visits, onHeaderChange }) => {
  const [newLanguage, setNewLanguage] = useState("es"); // Inicializa según lo necesario

  useEffect(() => {
    initHeaderToggle();
    addVisit();
  }, []);

  useEffect(() => {
    onHeaderChange(newLanguage);
  }, [newLanguage]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    setNewLanguage(selectedLanguage.toLowerCase());
  };

  function addVisit() {
    set(ref(database, "visits/" + generateUniqueIdWithTimestamp()), {
      register: getRegisterDate(),
    })
      .then(() => {
        console.log("visit add");
      })
      .catch((error) => {
        console.log("visit failed");
      });

    set(ref(database, "visits/count"), {
      visits
    })
      .then(() => {
        console.log("visit add");
      })
      .catch((error) => {
        console.log("visit failed");
      });
  }

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <div className="d-flex align-items-center">
        <i className="header-toggle d-xl-none bi bi-list" />
      </div>

      <div style={{ backgroundColor: "transparent", textAlign: "left" }}>
        <i className="bi bi-globe navicon" style={{ color: "#149ddd" }}>
          <select
            onChange={handleLanguageChange}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "none",
            }}
          >
            <option>ES</option>
            <option>US</option>
          </select>
        </i>
      </div>

      <div className="profile-img">
        <img
          src={config.profileImage}
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>

      <a
        href="#"
        className="logo d-flex align-items-center justify-content-center"
        style={{ textDecoration: "auto" }}
      >
        <h1 className="sitename shadown">
          {data.profile.name + " " + data.profile.surname}
        </h1>
      </a>

      <div className="social-links text-center">
        {config.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={link.className}
            target="_blank"
            download={link.download ? "" : undefined}
          >
            <i className={link.iconClass} />
          </a>
        ))}
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a
              href="#hero"
              className="active"
              style={{ textDecoration: "auto" }}
            >
              <i className="bi bi-house navicon" />
              {data.sections.home.sectionTitle}
            </a>
          </li>
          <li>
            <a href="#about" style={{ textDecoration: "auto" }}>
              <i className="bi bi-person navicon" />{" "}
              {data.sections.about.sectionTitle}
            </a>
          </li>
          <li>
            <a href="#resume" style={{ textDecoration: "auto" }}>
              <i className="bi bi-file-earmark-text navicon" />{" "}
              {data.sections.resume.sectionTitle}
            </a>
          </li>
          <li>
            <a href="#skills" style={{ textDecoration: "auto" }}>
              <i className="bi bi-bar-chart-steps navicon" />{" "}
              {data.sections.skills.sectionTitle}
            </a>
          </li>
          <li>
            <a href="#portfolio" style={{ textDecoration: "auto" }}>
              <i className="bi bi-images navicon" />{" "}
              {data.sections.projects.sectionTitle}
            </a>
          </li>
          <li>
            <a href="#contact" style={{ textDecoration: "auto" }}>
              <i className="bi bi-envelope navicon" />{" "}
              {data.sections.contact.sectionTitle}
            </a>
          </li>
        </ul>

        <div id="stats" class="stats section">
          <div class="container" data-aos-delay="100">
            <div class="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-people" />
                  <p style={{ color: "white" }}>
                    <strong>{visits}</strong>{" "}
                    <span>{data.sections.visits.label}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <>{/* End Stats Item */}</>
    </header>
  );
};

export default Header;
