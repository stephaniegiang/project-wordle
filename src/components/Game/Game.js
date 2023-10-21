import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessForm from '../GuessForm'
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([])

  function addGuess(guess) {
    const newGusses = [...guesses]
    newGusses.push(guess)
    setGuesses(newGusses)
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm addGuess={addGuess} />
    </>
  )
}

export default Game;
