import { useState } from 'react';

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
    <div>
      <img
        src={GameNews[currentImage].img}
        alt={GameNews[currentImage].title}
      />
      <p>{GameNews[currentImage].title}</p>

      <div>
        <button onClick={goPrevious}>Pre</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;
