import React, { useState } from 'react';
import './Slideshow.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1   
    );
  };

  if (pictures.length === 1) {
    return (
      <div className="carousel">
        <div className="carousel-image">
          <img src={pictures[0]} alt="Single Slide" />
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <div className="carousel-image">
       
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />  {/* affichage de l'image actuelle  */}
      </div>
     
      <button className="carousel-button previous" onClick={handlePrevious}>  {/* appeler la fonction pour img précédente */}
        <FaChevronLeft />
      </button>
      <button className="carousel-button next" onClick={handleNext}>  {/* appeler la fonction pour img suivante */}
        <FaChevronRight />
      </button>
      <div className="slide-number">
        
        {currentIndex + 1} / {pictures.length} {/* afficher l'img actuelle sur le nombre totale des imgs  */}
      </div>
    </div>
  );
};

export default Slideshow;