import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import './Dropdown.scss'; // Fichier CSS pour le composant Dropdown

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {title}
        <span className={`icon ${isOpen ? 'rotated' : ''}`}>
          <MdExpandMore />
        </span>
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;