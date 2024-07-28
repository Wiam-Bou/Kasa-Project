import React from 'react';
import Banner from '../Layouts/Banner.jsx';
import Appartements from '../components/Appartements.jsx';
import './Home.scss';


function Home() {
  return (
    <>
      <Banner />
      <Appartements />
    </>
  );
}

export default Home;