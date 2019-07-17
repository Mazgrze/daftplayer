/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import TinySlider from 'tiny-slider-react';
import CoverSlider from './CoverSlider';

// Slider is not passing without errors
it('renders slider with error', () => {
  const div = document.createElement('div');
  expect(() => {
    ReactDOM.render(
      <TinySlider>
        <div>foo</div>
        <div>bas</div>
        <div>bar</div>
      </TinySlider>,
      div,
    );
  }).toThrow();
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoverSlider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
