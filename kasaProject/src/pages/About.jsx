import React, { useState } from 'react';
import Dropdown from '../components/Dropdown'; // Importation du composant Dropdown
import './About.scss'; // Assurez-vous que le fichier SCSS est bien lié

function About() {
  // Texte des descriptions pour chaque dropdown
  const descriptions = {
    fiabilité: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service: "Nos équipes sont disponibles pour vous fournir une expérience exceptionnelle. Nous assurons un service client 24/7 pour répondre à toutes vos questions et besoins.",
    securité: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  };

  return (
    <div className="about-page">
      <div className='about-banner'>
       <img src="/Paysage.png" alt="paysage" />
      </div>
      
      <div className="dropdown-container">
        {Object.keys(descriptions).map((item) => (
          <Dropdown key={item} title={item.charAt(0).toUpperCase() + item.slice(1)}>
            <p>{descriptions[item]}</p>
          </Dropdown>
        ))}
      </div>
    </div>
  );
}

export default About;