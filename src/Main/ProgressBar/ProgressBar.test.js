/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './ProgressBar';

describe('ProgressBar tests', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProgressBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ProgressBar
        seek={jest.fn()}
        elapsed={12}
        duration={201}
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
