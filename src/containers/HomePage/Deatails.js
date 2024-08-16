import React, { useState, useEffect } from 'react';
import '../../index.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/aos/aos.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Footer from '../../components/Footer.js';
import ProjectDetail from '../../components/ProjectDetail.js';
import { database, ref, onValue } from '../../services/firebase_connection.js';

import { useParams } from 'react-router-dom';

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);

  const { id, cc } = useParams();

  useEffect(() => {
    const dataRef = ref(database, 'master-data');

    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const value = snapshot.val();
        setData(value[cc]);
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

  return (
    <div>
      {loading ? (
        <div id="preloader"></div>
      ) : (
        <>
          <main className="main">
            <ProjectDetail
              data={data.sections.projects}
              config={config}
              profile={data.profile}
              item={id}
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

export default Details;
