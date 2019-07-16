/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import more from './hide_ico.svg';
import { formatDuration } from '../album';
import './Playlist.scss';

export default function Playlist({
  tracks, shufflePlay, playTrack, isActive, togglePlaylist,
}) {
  function selectTrack(e) {
    try {
      const { trackId } = e.target.closest('[data-track-id]').dataset;
      if (trackId) playTrack(parseInt(trackId, 10));
      // eslint-disable-next-line no-empty
    } catch (err) {}
  }

  const list = tracks.map((song, index) => (
    <li className="playlist__li" data-track-id={index} key={song.id}>
      <div className="playlist__track">
        <div className="playlist__title">{song.title}</div>
        <div className="playlist__dots" />
        <div className="playlist__duration">{formatDuration(song.duration)}</div>
      </div>
    </li>
  ));

  return (
    <div className={`playlist ${isActive ? 'playlist--active' : ''}`}>
      <ol className="playlist__list" onClick={selectTrack}>
        {list}
      </ol>
      <div className="playlist__action">
        <button type="button" className="playlist__shuffle" onClick={shufflePlay}>
          SHUFFLE PLAY
        </button>
        <button type="button" onClick={togglePlaylist} className="playlist__close">
          <img src={more} alt="" className="playlist__more" />
        </button>
      </div>
    </div>
  );
}
