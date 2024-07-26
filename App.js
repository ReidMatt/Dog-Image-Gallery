import React, {useState} from 'react';
import './App.css';
import BreedSelector from './BreedSelector';
import ImageGallery from './ImageGallery';

const App = ()=> {
  const [selectedBreed, setSelectedBreed] = useState('');
  const[imageCount, setImageCount] = useState(1);
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <h1>Dog Image Gallery</h1>
      <BreedSelector
      setSelectedBreed={setSelectedBreed}
      setImageCount={setImageCount}
      setImages={setImages}
      />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;