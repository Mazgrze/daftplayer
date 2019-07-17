/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import tracks from '../album';

describe('Head tests', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Head />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Head
        track={tracks[0]}
        goBack={jest.fn()}
        isPlayed={false}
        isPlaylist={false}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
