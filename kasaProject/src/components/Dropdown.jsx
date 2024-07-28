import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import './Dropdown.scss'; // Fichier CSS pour le composant Dropdown

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {title}
        {isOpen ? <MdExpandLess /> : <MdExpandMore />}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;