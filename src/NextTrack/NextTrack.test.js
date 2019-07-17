/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import NextTrack from './NextTrack';
import tracks from '../album';

describe('NextTrack tests', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NextTrack />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <NextTrack
        nextTrack={tracks[0]}
        showPlaylist={jest.fn()}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
