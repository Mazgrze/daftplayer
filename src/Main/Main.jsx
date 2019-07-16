import React, { useState, useEffect } from 'react';
import CoverSlider from './CoverSlider/CoverSlider';
import './Main.scss';
import Navigation from './Navigation/Navigation';
import ProgressBar from './ProgressBar/ProgressBar';
import Waveform from './Waveform/Waveform';

export default function Main({
  tracks,
  currentTrack,
  togglePlay,
  next,
  prev,
  playTrack,
  isPlayed,
}) {
  const [elapsedTime, setElapsed] = useState(0);
  const [timer, setTimer] = useState(null);
  const { duration, title, artist } = tracks[currentTrack];

  function startPlaying() {
    return setInterval(() => {
      setElapsed(previousTime => parseInt(previousTime, 10) + 1);
    }, 1000);
  }

  function stopPlaying(interval) {
    clearInterval(interval);
    setTimer(null);
  }

  useEffect(() => {
    if (isPlayed) {
      setTimer(startPlaying());
    } else {
      stopPlaying(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlayed]);

  useEffect(() => {
    setElapsed(0);
  }, [currentTrack]);

  useEffect(() => {
    const elapsed = parseInt(elapsedTime, 10);
    const trackDuration = parseInt(duration, 10);
    if (elapsed > trackDuration) next();
  }, [elapsedTime, duration, next]);

  return (
    <div className="main">
      <CoverSlider
        tracks={tracks}
        currentTrack={currentTrack}
        playTrack={playTrack}
        isPlayed={isPlayed}
      />
      <div>
        <div className="main__title">{title}</div>
        <div className="main__artist">{artist}</div>
      </div>
      <Navigation
        next={next}
        prev={prev}
        togglePlay={togglePlay}
        isPlayed={isPlayed}
        goNext={next}
        goPrev={prev}
      />
      <ProgressBar duration={duration} elapsed={elapsedTime} seek={setElapsed} />
      <Waveform duration={duration} elapsed={elapsedTime} />
    </div>
  );
}
