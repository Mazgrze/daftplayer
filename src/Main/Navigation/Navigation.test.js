/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

describe('Navigation tests', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Navigation
        goNext={jest.fn()}
        goPrev={jest.fn()}
        togglePlay={jest.fn()}
        isPlayed={false}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
