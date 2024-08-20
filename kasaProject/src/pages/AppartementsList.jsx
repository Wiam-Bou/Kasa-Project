import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../logements.json';
import Slideshow from '../components/Slideshow';
import Dropdown from '../components/Dropdown';
import '../pages/AppartementsList.scss';

function AppartementsList() {
  const { id } = useParams(); 
  const navigate = useNavigate(); // utilisé pour rediriger vers une autre page 
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    // Redirection en cas d'appartement non trouvé
    if (!logement) {
      navigate('/404', { replace: true });  //suppr la page act de l'historique,la remplace par la nouvelle (ici, /404).
    }
  }, [logement, navigate]);

  // Ne pas rendre le contenu si l'appartement est introuvable
  if (!logement) {
    return null;
  }

  return (
    <div className="appart-page">
      <div className="appart-pic">
        {/* Utilisation du composant Slideshow */}
        <Slideshow pictures={logement.pictures} />
      </div>

      <div className="appart-infos">
        <div className="appart-details">
          <h1 className="appart-title">{logement.title}</h1>
          <h2 className="appart-subtitle">{logement.location}</h2>
          <div className="appart-tag">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="appart-host">
          <div className="host-info">
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
          <div className="appart-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>{index < logement.rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="dropdown-container">
        {/* Utilisation du composant Dropdown pour la description */}
        <Dropdown title="Description">
          <p className="description-content">{logement.description}</p>
        </Dropdown>

        {/* Utilisation du composant Dropdown pour les équipements */}
        <Dropdown title="Équipements">
          <ul className="equipments-content">
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}

export default AppartementsList;