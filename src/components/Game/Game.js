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
  const [guessList, setGuessList] = React.useState([])

  function addToGuessList(guess) {
    const newGuessList = [...guessList]
    newGuessList.push(guess)
    setGuessList(newGuessList)
  }
  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessForm addToGuessList={addToGuessList} />
    </>
  )
}

export default Game;
