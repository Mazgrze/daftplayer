/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './Playlist';
import tracks from '../album';

describe('Playlist tests', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Playlist />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Playlist
        tracks={tracks}
        shufflePlay={jest.fn()}
        playTrack={jest.fn()}
        togglePlay={jest.fn()}
        isActive
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
