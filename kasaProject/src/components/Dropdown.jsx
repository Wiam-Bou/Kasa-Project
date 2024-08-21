import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import './Dropdown.scss'; 


function Dropdown({ title, children }) { //Déclaration du composant fonctionnel Dropdown avec les props title et children
  const [isOpen, setIsOpen] = useState(false); // Création d'un état local `isOpen` pour gérer l'ouverture/fermeture du Dropdown

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState); // Inverse la valeur actuelle de `isOpen`
  };

  return (
   
   <div className={`dropdown ${isOpen ? 'open' : ''}`}> {/* Conteneur principal,  classe 'open' si `isOpen` est true */}
     
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {title}
         {/* Conteneur pour l'icône, applique la classe 'rotated' si `isOpen` est true */}
        <span className={`icon ${isOpen ? 'rotated' : ''}`}>
          <MdExpandMore />
        </span>
      </button>
      <div className={`dropdown-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown; // Exportation pour utilisation dans d'autres parties de l'application