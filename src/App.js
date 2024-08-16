import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './routes'; // Asegúrate de que la ruta a tu archivo routes.js sea correcta

function App() {
  // Inicializar scripts que lo requieran

  return (
    <Router>
      <Routes /> {/* Renderiza las rutas definidas en routes.js */}
    </Router>
  );
}

export default App;
