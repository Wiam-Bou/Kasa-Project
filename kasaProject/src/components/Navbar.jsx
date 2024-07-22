import React from 'react';
import './Navbar.scss'


function Navbar() { // utiliser plutôt une fonction fléchée 
  return (
    <nav className='navbar'>
    <div className='logo'>
        <img src="LOGO.jpg" alt="logo Kasa" />
    </div>
    <div>Accueil</div>
    
    <div>A propos</div>
    </nav>
  )
}

export default Navbar
