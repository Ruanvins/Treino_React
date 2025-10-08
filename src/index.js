/*  Arquivo index.js que contém a renderização do app.js */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/*  Importando o arquivo global.js
que contém as estilizações globais do projeto
instanciados na tag <GlobalStyle />*/

import GlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);