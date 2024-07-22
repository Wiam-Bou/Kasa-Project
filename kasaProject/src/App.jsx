
import React from 'react'
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Appartements from './components/Appartements.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';



function App() {
  return (
    <div>
    <Navbar/>
    <Main>
    <Banner/>
    <Appartements/>
    </Main>
    <Footer/>
    </div>
  )
}

export default App
