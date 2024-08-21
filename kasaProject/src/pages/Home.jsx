import React from 'react';
import Banner from '../Layouts/Banner.jsx';
import Cards from '../components/Cards.jsx';
import './Home.scss';


function Home() {
  return (
    <div className='home-container'>
      <Banner />
      <Cards/>
    </div>
  );
}

export default Home;