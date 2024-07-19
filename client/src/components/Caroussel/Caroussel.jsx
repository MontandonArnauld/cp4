import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Caroussel.css";

// Fonction pour mélanger un tableau
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/bosses")
      .then((response) => {
        const shuffledSlides = shuffleArray(response.data); // Mélange les images
        setSlides(shuffledSlides);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [slides]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="carousel">
      <button
        className="carousel-button prev"
        type="button"
        onClick={handlePrev}
      >
        Prev
      </button>
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image1}
          alt={slides[currentIndex].name}
        />
        <div className="carousel-content">
          <h2>{slides[currentIndex].name}</h2>
          <p>{slides[currentIndex].description}</p>
          <Link to={`/boss/${slides[currentIndex].id}`}>
            <button type="button" className="read-more-button">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <button
        className="carousel-button next"
        type="button"
        onClick={handleNext}
      >
        Next
      </button>
      <button
        className="carousel-button prev"
        type="button"
        onClick={handlePrev}
      >
        Preview
      </button>
    </div>
  );
}

export default Carousel;
