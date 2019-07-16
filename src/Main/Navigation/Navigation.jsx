import React from 'react';
import playInactive from './Play_inactive.png';
import playActive from './Play_active.png';
import previousIco from './previous_ico.svg';
import nextIco from './next_ico.svg';
import shuffleIco from './shuffle_ico.svg';
import repeatIco from './repeat_ico.svg';
import './Navigation.scss';

export default function Navigation({
  togglePlay, isPlayed, goNext, goPrev,
}) {
  return (
    <div className="navigation">
      <button disabled type="button" className="navigation__button ">
        <img src={shuffleIco} alt="Play" />
      </button>
      <button
        onClick={goPrev}
        type="button"
        className="navigation__button navigation__button--active  "
      >
        <img src={previousIco} alt="Play" />
      </button>
      <button
        type="button"
        className="navigation__button navigation__button--play navigation__button--active"
        onClick={togglePlay}
      >
        <img className="navigation__play" src={isPlayed ? playActive : playInactive} alt="Play" />
      </button>
      <button
        onClick={goNext}
        type="button"
        className="navigation__button navigation__button--active  "
      >
        <img src={nextIco} alt="Play" />
      </button>
      <button disabled type="button" className="navigation__button ">
        <img src={repeatIco} alt="Play" />
      </button>
    </div>
  );
}
