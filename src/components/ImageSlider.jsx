import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../navbar.css';

function ImageSlider({ GameNews }) {
  const [currentImage, setCurrentImage] = useState(0);

  const goPrevious = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? GameNews.length - 1 : prevImage - 1
    );
  };

  const goNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === GameNews.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className='MainNews-Button'>
      <img
        src={GameNews[currentImage].img}
        alt={GameNews[currentImage].title}
      />

      <div className='MainNews-SlideBtn'>
      <p>{GameNews[currentImage].title}</p>
      <div style={{display: 'flex' }}>
        <button onClick={goPrevious}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <button onClick={goNext}><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
      </div>
    </div>
  );
}

export default ImageSlider;
