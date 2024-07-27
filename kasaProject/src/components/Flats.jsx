import React from 'react';
import './Flats.scss';
import { Link } from 'react-router-dom';


function Flats() {
  return (
    <Link className='flatList' to= "/AppartementsList">
    <div >
     <div className='flatTitle'> Titre de la location</div>
     
    </div>
    </Link>
  )
}

export default Flats
