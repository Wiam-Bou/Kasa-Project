import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json'; 
import Dropdown from '../components/Dropdown'; // Importation du composant Dropdown
import '../pages/AppartementsList.scss';

function AppartementsList() {
  const { id } = useParams(); // Récupère l'ID du logement à partir de l'URL
  const logement = logements.find(logement => logement.id === id); // Trouve le logement correspondant

  // Vérifie si le logement existe
  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='appart-page'>
      <div className='appart-pic'>
        <img src={logement.cover} alt={logement.title} />
      </div>

      <div className='appart-infos'>
        <div className='appart-details'>
          <h1 className='appart-title'>{logement.title}</h1>
          <h2 className='appart-subtitle'>{logement.location}</h2>
          <div className='appart-tag'>
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className='appart-host'>
          <h3>{logement.host.name}</h3>
          <img src={logement.host.picture} alt={logement.host.name} className='host-picture' />
          <div className='appart-rating'>
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>{index < logement.rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>

      <div className='dropdown-container'>
        <Dropdown title="Description">
          <p className='description-content'>
            {logement.description}
          </p>
        </Dropdown>

        <Dropdown title="Équipements">
          <ul className='equipments-content'>
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