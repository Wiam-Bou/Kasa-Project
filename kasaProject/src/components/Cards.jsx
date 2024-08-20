import React from 'react';
import './Cards.scss';
import { Link } from 'react-router-dom'; // créer des liens interne
import logements from '../logements.json'; // importation des logements

function Cards() {
  return (
    <div className="appartement-list">
      <div className='flats'>
        {/* parcourir le tableau avec map et créer une carte pour chaque logement ( link) */}
        {logements.map((logement) => (
          //link pour rendre les cartes cliquables et redirige vers la page des appartements
          <Link key={logement.id} className='flatList' to={`/AppartementsList/${logement.id}`}>
            <div className='flat'>
              <img src={logement.cover} alt={logement.title} className='flatCover' />
              <div className='flatTitle'>{logement.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;