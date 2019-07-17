import React from 'react';
import './Head.scss';
import back from './back_ico.svg';
import more from './more_ico.svg';
import playActive from './Play_active.png';
import playInactive from './Play_inactive.png';

export default function Head({
  track, showInfo, goBack, togglePlay, isPlayed, isPlaylist,
}) {
  const { artist, album, title } = track || {};
  return (
    <div className="head">
      <button type="button" onClick={goBack}>
        <img src={back} className="head__icon" alt="go back" />
      </button>

      {isPlaylist ? (
        <>
          <div className="head__info head__info--track">
            <div className="head__title">{title}</div>
            <div className="head__prop">{artist}</div>
          </div>
          <button type="button" onClick={togglePlay}>
            <img
              src={isPlayed ? playActive : playInactive}
              className="head__icon head__icon--play"
              alt="show more info"
            />
          </button>
        </>
      ) : (
        <>
          <div className="head__info">
            <div className="head__prop">Album</div>
            <div className="head__album">{album}</div>
          </div>
          <button type="button" onClick={showInfo}>
            <img src={more} className="head__icon" alt="show more info" />
          </button>
        </>
      )}
    </div>
  );
}
