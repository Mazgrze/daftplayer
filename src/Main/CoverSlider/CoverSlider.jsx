import React, { useEffect } from 'react';
import TinySlider from 'tiny-slider-react';
import './CoverSlider.scss';
import logo from './daft_logo.svg';

const settings = {
  lazyload: false,
  controls: false,
  nav: false,
  items: 1,
  loop: false,
  rewind: false,
  autoplay: false,
  edgePadding: 150,
  startIndex: 0,
  mouseDrag: true,
  responsive: {
    280: {
      edgePadding: 50,
    },
    360: {
      edgePadding: 80,
    },
    420: {
      edgePadding: 110,
    },
    480: {
      edgePadding: 130,
    },
    540: {
      edgePadding: 150,
    },
  },
};
let preventSlide = false;
let softwareChange = false;
let lastIndex = settings.startIndex;
export default function CoverSlider({
  tracks, currentTrack, playTrack, isPlayed,
}) {
  let sliderObject;

  function slideChanged(e) {
    if (!softwareChange) {
      preventSlide = true;
      lastIndex = e.index;
      playTrack(e.index);
    }
    softwareChange = false;
  }

  useEffect(() => {
    if (sliderObject) {
      if (!preventSlide && lastIndex !== currentTrack) {
        lastIndex = currentTrack;
        softwareChange = true;
        sliderObject.slider.goTo(currentTrack);
      }
      preventSlide = false;
    }
  }, [currentTrack, sliderObject]);

  /* eslint-disable react/no-array-index-key */
  return (
    <div className="slider">
      {tracks && tracks.length ? (
        <TinySlider
          settings={settings}
          onIndexChanged={slideChanged}
          ref={(ts) => {
            sliderObject = ts;
          }}
        >
          {tracks.map((el, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <img
                className="slider__cover"
                src={`${process.env.PUBLIC_URL}/${el.coverFile}`}
                alt=""
              />
            </div>
          ))}
        </TinySlider>
      ) : null}
      {isPlayed && (
        <div className="slider__circle">
          <img src={logo} alt="" className="slider__logo" />
        </div>
      )}
    </div>
  );
  /* eslint-enable react/no-array-index-key */
}
