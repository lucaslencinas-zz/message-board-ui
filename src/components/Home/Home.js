import React from 'react';
import PropTypes from 'prop-types';
import { ChannelPropTypes } from '../commons/BoardPropTypes';
import Grid from './Grid';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    const { channels = [], onLoadChannels } = this.props;

    if (channels.length === 0) {
      onLoadChannels();
    }
  }

  render() {
    const { channels, onLoadChannels } = this.props;

    return (
      <div className="home">
        <h1>Message Board</h1>
        <h3>Channels</h3>
        <Grid
          channels={channels}
          onLoadChannels={onLoadChannels}
        />
      </div>
    );
  }
}

Home.propTypes = {
  channels: ChannelPropTypes,
  onLoadChannels: PropTypes.func.isRequired
};

export default Home;
