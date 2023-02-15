import React from 'react';
import '../styles/Input.css';

// For search box
const Input = ({ handleSearch }) => {
  return (
    <div className='input-wrapper'>
      <input
        className='search'
        placeholder='Search a movie name'
        onChange={handleSearch}
      />
    </div>
  );
};

export default Input;