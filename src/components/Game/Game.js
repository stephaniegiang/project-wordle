import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessForm from '../GuessForm'
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guessList, setGuessList] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(() => ""))
  const [guessListIndex, setGuessListIndex] = React.useState(0)

  function addToGuessList(guess) {
    if (guessListIndex == NUM_OF_GUESSES_ALLOWED) {
      return window.alert("No more guesses allowed")
    }

    const newGuessList = [...guessList]
    newGuessList[guessListIndex] = guess
    setGuessListIndex(guessListIndex + 1)
    setGuessList(newGuessList)
  }
  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm addToGuessList={addToGuessList} />
    </>
  )
}

export default Game;
