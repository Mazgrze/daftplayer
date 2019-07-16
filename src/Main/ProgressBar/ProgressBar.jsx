import React from 'react';
import { formatDuration } from '../../album';
import './ProgressBar.scss';

export default function ProgressBar({ seek, elapsed, duration }) {
  function setTime(e) {
    seek(e.target.value);
  }

  return (
    <div className="progress">
      <div className="progress__elapsed">{formatDuration(elapsed)}</div>
      <div className="progress__bar">
        <input className="progress__input" type="range" min="0" value={elapsed} max={duration} onChange={setTime} />
      </div>
      <div className="progress__duration">{formatDuration(duration)}</div>
    </div>
  );
}
