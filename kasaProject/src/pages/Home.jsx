import React from 'react';
import Banner from '../Layouts/Banner.jsx';
import Appartements from '../components/Appartements.jsx';
import './Home.scss';


function Home() {
  return (
    <div className='home-container'>
      <Banner />
      <Appartements />
    </div>
  );
}

export default Home;