import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const channelUrl = ({ id }) => `/channels/${id}`;

const Card = ({ channel = {} }) => (
  <Link to={channelUrl(channel)} className="card">
    <div className="card-text">
      {channel.name}
    </div>
  </Link>
);

Card.propTypes = {
  channel: PropTypes.object.isRequired
};

export default Card;
