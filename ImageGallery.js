import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({image}) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image} alt="dog" />
    </div>
  ))}
  </div>
  );
};

export default ImageGallery;