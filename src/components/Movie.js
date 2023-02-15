import React from 'react';
import '../styles/Movie.css';

// The tile with movie poster , title information
const Movie = ({ image, title }) => {
  return (
    <div className='movietile'>
      {image === 'N/A' ? ( // if image is not available
        <img src={image} alt={title} /> // we can provide a 'not available' image here
      ) : (
        <img src={image} alt={title} />
      )}

      <div className='info'>
        <span className='title'>{title}</span>
      </div>
    </div>
  );
};

export default Movie;