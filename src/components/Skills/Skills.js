/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';

export default function Skills() {
  return (
    <div className='skills__container card elevation-01dp'>
      <ul className='skills__list' role='list' aria-label='skills'>
        <li>
          <i
            aria-label='HTML'
            className='about__skill-icon devicon-html5-plain-wordmark'
          ></i>
        </li>
        <li>
          <i
            aria-label='CSS'
            className='about__skill-icon devicon-css3-plain-wordmark'
          ></i>
        </li>
        <li>
          <i
            aria-label='JavaScript'
            className='about__skill-icon devicon-javascript-plain'
          ></i>
        </li>
        <li>
          <i
            aria-label='React'
            className='about__skill-icon devicon-react-original'
          ></i>
        </li>
        <li>
          <i
            aria-label='Webpack'
            className='about__skill-icon devicon-webpack-plain'
          ></i>
        </li>
        <li>
          <i
            aria-label='Sass'
            className='about__skill-icon devicon-sass-original'
          ></i>
        </li>
        <li>
          <i
            aria-label='Git'
            className='about__skill-icon skill-icon devicon-git-plain'
          ></i>
        </li>
        <li>
          <i
            aria-label='GitHub'
            className='about__skill-icon devicon-github-original'
          ></i>
        </li>
        <li>
          <i
            aria-label='npm'
            className='about__skill-icon devicon-npm-original-wordmark'
          ></i>
        </li>
        <li>
          <i
            aria-label='Linux'
            className='about__skill-icon devicon-linux-plain'
          ></i>
        </li>
        <li>
          <i
            aria-label='VS Code'
            className='about__skill-icon devicon-vscode-plain'
          ></i>
        </li>
      </ul>
    </div>
  );
}
