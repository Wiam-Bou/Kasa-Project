import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';
import '../pages/AppartementsList.scss';
import Slideshow from '../components/Slideshow';

function AppartementsList() {
  const { id } = useParams(); 
  const logement = logements.find((logement) => logement.id === id); // trouver l'appart correspondant

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen((prevState) => !prevState);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen((prevState) => !prevState);
  };

  // Checker si l'appart existe 
  if (!logement) {
    return <div>{<ErrorPage/>}</div>;
  }

  return (
    <div className="appart-page">
      <div className="appart-pic">
        {/* Use the Slideshow component */}
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
          <h3>{logement.host.name}</h3>
          <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          <div className="appart-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>{index < logement.rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="dropdown-container">
        <div className="appart-description">
          <button onClick={toggleDescription} className="dropdown-toggle">
            Description
            {isDescriptionOpen ? <MdExpandLess /> : <MdExpandMore />}
          </button>
          {isDescriptionOpen && <p className="description-content">{logement.description}</p>}
        </div>

        <div className="appart-equipements">
          <button onClick={toggleEquipments} className="dropdown-toggle">
            Équipements
            {isEquipmentsOpen ? <MdExpandLess /> : <MdExpandMore />}
          </button>
          {isEquipmentsOpen && (
            <ul className="equipments-content">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppartementsList;