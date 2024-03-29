// components/SearchPlayer.js
import React, { useState } from 'react';

const SearchPlayer = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='w-full'>
      <input
        type="text"
        placeholder="Search for a player..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className='text-white bg-slate-900 rounded-md w-full'
      />
    </div>
  );
};

export default SearchPlayer;
