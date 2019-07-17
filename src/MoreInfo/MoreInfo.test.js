/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import MoreInfo from './MoreInfo';
import tracks from '../album';

describe('MoreInfo tests', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MoreInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders with props', () => {
    const div = document.createElement('div');

    ReactDOM.render(<MoreInfo track={tracks[0]} isActive />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
