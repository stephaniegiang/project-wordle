import React from 'react';
import { range } from '../../utils';

function GuessCells({guess, id}) {
  const chars = guess ? guess.split("") : range(5).map(() => "")

  return (
    <p key={id} className="guess">
      {chars.map((char, index) => (
         <span key={index} className="cell">{char}</span>
      ))}
    </p>
  );
}

export default GuessCells;
