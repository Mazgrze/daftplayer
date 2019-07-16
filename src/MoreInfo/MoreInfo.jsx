import React from 'react';
import './MoreInfo.scss';

export default function MoreInfo({ track, isActive }) {
  const { title, artist, coverFile } = track;
  return (
    <div className={`more ${isActive ? 'more--active' : ''}`}>
      <img className="more__cover" src={`${process.env.PUBLIC_URL}/${coverFile}`} alt="" />
      <div className="more__title">{title}</div>
      <div className="more__artist">{artist}</div>
      <div className="more__dots"> . . . </div>
      <button type="button" className="more__action">
        Add to playlist
      </button>
      <button type="button" className="more__action">
        Show album
      </button>
      <button type="button" className="more__action">
        Share with friends
      </button>
    </div>
  );
}
