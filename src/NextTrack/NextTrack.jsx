import React from 'react';
import './NextTrack.scss';
import playlist from './playlist_ico.svg';
import { formatDuration } from '../album';

export default function NextTrack({ nextTrack, showPlaylist }) {
  return (
    <div className="next">
      {nextTrack ? (
        <>
          <button type="button" onClick={showPlaylist}>
            <img className="next__playlist" src={playlist} alt="Open playlist" />
          </button>
          <div className="next__content">
            <div className="next__prop">NEXT</div>
            <div className="next__info">
              <div className="next__title">{nextTrack.title}</div>
              <div className="next__dots" />
              <div className="next__duration">{formatDuration(nextTrack.duration)}</div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
