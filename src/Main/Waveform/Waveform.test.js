/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Waveform from './Waveform';

describe('Waveform tests', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Waveform />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Waveform
        elapsed={10}
        duration={121}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
