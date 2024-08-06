import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import './Dropdown.scss'; 

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
      <div className={`dropdown-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;