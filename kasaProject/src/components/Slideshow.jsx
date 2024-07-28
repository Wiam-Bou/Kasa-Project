import React, { useState } from 'react';
import './Slideshow.scss';

// Le composant Carousel reçoit une liste de 'pictures' en tant que prop
const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image précédente
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour aller à l'image suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="carousel-button previous" onClick={handlePrevious}>
        Précédent
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        Suivant
      </button>
    </div>
  );
};

// Exemple d'utilisation du composant Carousel
const App = () => {
  const pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
  ];

  return (
    <div className="app">
      <h1>Carrousel d'Images</h1>
      <Carousel pictures={pictures} />
    </div>
  );
};

export default App;