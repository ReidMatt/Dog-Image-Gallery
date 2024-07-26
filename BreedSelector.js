import React, {useState, useEffect} from 'react';
import axios from 'axios';

const BreedSelector = ({setSelectedBreed, setImageCount, setImages}) => {
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState('');
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      setBreeds(Object.keys(response.data.messages));
    })
    .catch(error => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedBreed(breed);
    setImageCount(count);
    axios.get('https://dog.ceo/api/breed/${breed}/images/random/${count}')
    .then(response => {
      setImages(response.data.message);
    })
    .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="breed">Select Breed: </label>
        <select
        id="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        >
          <option value="">--Select a breed--</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}></option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="count">Number of Images:</label>
        <input
        type="number"
        id="count"
        value={count}
        min="1"
        max="100"
        onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <button type="submit">Fetch Images</button>
    </form>
  );
};

export default BreedSelector;