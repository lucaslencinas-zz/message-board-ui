import React from 'react';
import PropTypes from 'prop-types';
import { ChannelPropTypes } from '../../commons/BoardPropTypes';
import Card from './Card';
import './Grid.css';

const Grid = ({ channels = [] }) => (
  <div className="grid">
    {channels.map((channel) => (
      <div key={channel.id} className="card-wrapper">
        <Card channel={channel} />
      </div>
    ))}
  </div>
);

Grid.propTypes = {
  channels: PropTypes.arrayOf(ChannelPropTypes).isRequired
};

export default Grid;
