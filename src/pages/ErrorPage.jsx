import React from 'react';
import '../pages/ErrorPage.scss';
import {Link} from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-banner">
        <img src="404.png" alt="Erreur" />
      </div>
      <h1 className="error-text">
        Oups! La page que vous demandez n'existe pas
      </h1>
      <Link 
        to="/" 
        style={{
          color: "black", 
          cursor: "pointer"
        }}
      >
        retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;