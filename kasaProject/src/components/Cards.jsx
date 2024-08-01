import React from 'react';
import './Cards.scss';
import { Link } from 'react-router-dom';
import logements from '../logements.json';

function Cards() {
  return (
    <div className="appartement-list">
      <div className='flats'>
        {logements.map((logement) => (
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