import React from 'react';
import { ReactComponent as EyeLogo } from '../../assets/images/logos/eye20-empty.svg';
import { ReactComponent as D20 } from '../../assets/images/logos/d20.svg';

export default function Logo() {
  return (
    <div className='logo-container'>
      <D20 />
      <EyeLogo />
    </div>
  );
}
