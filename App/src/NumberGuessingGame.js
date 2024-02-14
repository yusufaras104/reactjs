import React, { useState } from 'react';

function NumberGuessingGame() {
  const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess < numberToGuess) {
      setMessage('Too low! Try again.');
    } else if (guess > numberToGuess) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Congratulations! You guessed the number.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess">Enter a number between 1 and 100:</label>
      <input type="number" id="guess" value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>
  );
}

export default NumberGuessingGame;