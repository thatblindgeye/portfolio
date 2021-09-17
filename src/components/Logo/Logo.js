import React, { useState } from 'react';
import { ReactComponent as EyeLogo } from '../../assets/images/logos/eye20-empty.svg';
import { ReactComponent as D20 } from '../../assets/images/dice/d20.svg';
import { ReactComponent as D12 } from '../../assets/images/dice/d12.svg';
import { ReactComponent as D4 } from '../../assets/images/dice/d4.svg';
import { ReactComponent as D6 } from '../../assets/images/dice/d6.svg';
import { ReactComponent as D8 } from '../../assets/images/dice/d8.svg';
import { ReactComponent as D10 } from '../../assets/images/dice/d10.svg';

const dieIcons = {
  4: <D4 />,
  6: <D6 />,
  8: <D8 />,
  10: <D10 />,
  12: <D12 />,
  20: <D20 />,
};

export default function Logo() {
  const [dice, setDice] = useState(20);
  const [roll, setRoll] = useState(null);

  const handleDiceRoll = (e) => {
    const randomNumber = Math.floor(Math.random() * dice + 1);

    setRoll(randomNumber);
  };

  const handleDiceChange = (e) => {
    const newSize = Number(e.target.dataset.size);

    setDice(newSize);
    setRoll(null);
  };

  return (
    <div className='dice-roll-container'>
      <div className='logo-container'>
        <button
          className='logo-button'
          onClick={handleDiceRoll}
          tabIndex='0'
          aria-label={`Roll a ${dice} sided die`}
        >
          {!roll ? (
            dieIcons[dice]
          ) : (
            <div aria-label={`You rolled ${roll}`} className='dice__result'>
              {roll}
            </div>
          )}
        </button>
        <EyeLogo aria-hidden='true' />
      </div>
      <div className='dice-buttons-container'>
        {Object.keys(dieIcons).map((die, index) => {
          return (
            <button
              className='button-contained'
              key={index}
              onClick={handleDiceChange}
              data-size={die}
            >
              d{die}
            </button>
          );
        })}
      </div>
    </div>
  );
}
