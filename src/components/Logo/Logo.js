import React, { useState } from 'react';
import { ReactComponent as EyeLogo } from '../../assets/images/logos/eye20-empty.svg';
import { ReactComponent as D20 } from '../../assets/images/logos/d20.svg';

export default function Logo() {
  // eslint-disable-next-line no-unused-vars
  const [dice, setDice] = useState(20);
  const [roll, setRoll] = useState(null);

  const handleDiceRoll = (e) => {
    const randomNumber = Math.floor(Math.random() * dice + 1);

    setRoll(randomNumber);
  };

  const handleDiceChange = (e) => {
    const newSize = Number(e.target.dataset.size);

    setDice(newSize);
  };

  return (
    <div className='dice-roll-container'>
      <div className='logo-container'>
        <button
          className='logo-button'
          onClick={handleDiceRoll}
          tabIndex='0'
          aria-label='Roll the d20'
        >
          {!roll ? (
            <D20 aria-hidden='true' />
          ) : (
            <div aria-label={`You rolled ${roll}`} className='dice__result'>
              {roll}
            </div>
          )}
        </button>
        <EyeLogo aria-hidden='true' />
      </div>
      <button onClick={handleDiceChange} data-size='4'>
        d4
      </button>
      <button onClick={handleDiceChange} data-size='6'>
        d6
      </button>
    </div>
  );
}
