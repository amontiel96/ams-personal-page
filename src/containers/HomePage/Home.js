import React, { useState, useEffect } from 'react';
import '../../index.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/aos/aos.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Footer from '../../components/Footer';
import Resume from '../../components/Resume';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import {
  database,
  ref,
  onValue,
  set,
} from '../../services/firebase_connection.js';
import { generateUniqueIdWithTimestamp } from '../../utils/utils.js';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [masterdata, setMasterData] = useState(null);
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);

  const [visits, setVisit] = useState(1);
  const [isLanguageChange, setLanguageChange] = useState(false);
  const [newLang, setNewLang] = useState('es');

  const [sessionID, setSessionID] = useState(generateUniqueIdWithTimestamp());

  useEffect(() => {
    const dataRef = ref(database, 'master-data');

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const value = snapshot.val();
        setMasterData(value);
        if (isLanguageChange == true) {
          setData(value[newLang]);
        } else {
          setData(value.es);
        }

        setConfig(value.config);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const dataVisit = ref(database, 'visits');

    const unsubscribe = onValue(
      dataVisit,
      (snapshot) => {
        var items = 0;

        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key; // La clave del hijo
          const data = childSnapshot.val(); // Los datos del hijo
          console.log(`Clave: ${key}, Datos:`, data);
          if(key != 'count'){
            items = items + 1;
          }
        });

        setVisit(items);
      },
      (error) => {
        setVisit(1);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleHeaderChange = (newData) => {
    setData(masterdata[newData]);
    setLanguageChange(true);
    setNewLang(newData);
  };

  return (
    <div>
      {loading ? (
        <div id="preloader"></div>
      ) : (
        <>
          <Header
            data={data}
            config={config}
            visits={visits}
            onHeaderChange={handleHeaderChange}
            sessionID={sessionID}
          />
          <main className="main">
            <Hero data={data} config={config} />
            <About data={data.sections.about} config={config} />
            <Resume
              data={data.sections.resume}
              config={config}
              profile={data.profile}
            />
            <Skills
              data={data.sections.skills}
              config={config}
              profile={data.profile}
            />
            <Projects
              data={data.sections.projects}
              config={config}
              profile={data.profile}
              languaje={newLang}
              sessionID={sessionID}
            />
            <Contact
              data={data.sections.contact}
              config={config}
              profile={data.profile}
              sessionID={sessionID}
              languaje={newLang}
            />
          </main>
          <Footer
            data={data.sections.footer}
            config={config}
            profile={data.profile}
          />
        </>
      )}
    </div>
  );
};

export default Home;
