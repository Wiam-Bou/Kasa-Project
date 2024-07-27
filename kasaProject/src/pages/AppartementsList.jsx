import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import '../pages/AppartementsList.scss';

function AppartementsList() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen((prevState) => !prevState);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen((prevState) => !prevState);
  };

  return (
    <div className='appart-page'>
      <div className='appart-pic'>
        <img src="./Background.png" alt="logement" />
      </div>

      <div className='appart-infos'>
        <div className='appart-details'>
          <h1 className='appart-title'>Cosy Loft on the Canal Saint-Martin</h1>
          <h2 className='appart-subtitle'>Paris, île-de-France</h2>
          <div className='appart-tag'>
            <span>Cosy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>

        <div className='appart-host'>
          <h3>Alexandre Dumas</h3>
          <div className='appart-rating'>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
        </div>
      </div>

      {/* Conteneur pour aligner les dropdowns */}
      <div className='dropdown-container'>
        {/* Dropdown pour la description */}
        <div className='appart-description'>
          <button onClick={toggleDescription} className='dropdown-toggle'>
            Description
            {isDescriptionOpen ? <MdExpandLess /> : <MdExpandMore />}
          </button>
          {isDescriptionOpen && (
            <p className='description-content'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor a
              praesentium reiciendis voluptas aperiam, debitis est accusamus. Harum
              velit quaerat quibusdam quas quod placeat, sit, officia qui ut,
              voluptas in distinctio nisi consequatur. Possimus ea, ipsum
              consequuntur fuga quae veniam repellat facilis earum. Inventore quasi,
              itaque nesciunt libero voluptatum beatae!
            </p>
          )}
        </div>

        {/* Dropdown pour les équipements */}
        <div className='appart-equipements'>
          <button onClick={toggleEquipments} className='dropdown-toggle'>
            Equipements
            {isEquipmentsOpen ? <MdExpandLess /> : <MdExpandMore />}
          </button>
          {isEquipmentsOpen && (
            <ul className='equipments-content'>
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppartementsList;