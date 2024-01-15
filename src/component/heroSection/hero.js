import React from 'react';
import photo from './photo.png';
import './hero.css';

const Hero = () => {
  return (
    <div className='container'>
      <img
        src={photo}
        alt='photo' />
      <div className='hero-text'>
        <h1>
          Let's build the future together
        </h1>
        <p>Hurry up <span>JOIN</span> our coummunity now!</p>
        
      </div>
    </div>
  );
};

export default Hero;