import React from 'react';

function GuessForm() {
  const [guess, setGuess] = React.useState("")
  const validateLength = /([A-Z]){5}/g

  function handleSubmit(event) {
    event.preventDefault()

    if (!guess.match(validateLength)) {
      return window.alert("Guess must have exactly 5 A-Z characters")
    }

    console.info({ guess });
    setGuess("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={event => handleSubmit(event)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={event => setGuess((event.target.value).toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
