import React from 'react';
import waves from './waveform.png';
import './Waveform.scss';

export default function Waveform({ elapsed, duration }) {
  const waveStyle = { width: `${100 - ((elapsed / duration) * 100)}%` };

  return (
    <div className="waveform">
      <img src={waves} className="waveform__img" alt="" />
      <div className="waveform__cover" style={waveStyle} />
    </div>
  );
}
