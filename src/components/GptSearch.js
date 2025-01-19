import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>

      {/* Content */}
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
