import React from 'react';
import GuessCells from '../GuessCells/GuessCells';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <GuessCells guess={guess} key={index} />
      ))}
    </div>
  );
}

export default GuessResults;
