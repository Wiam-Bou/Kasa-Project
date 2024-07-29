import React, { useState, useEffect } from 'react';
import './Slideshow.scss';

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

export default Slideshow;