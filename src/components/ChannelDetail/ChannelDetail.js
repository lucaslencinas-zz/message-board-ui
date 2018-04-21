import React from 'react';
import PropTypes from 'prop-types';
import { ChannelPropTypes } from '../commons/BoardPropTypes';
import Message from './Message';
import Create from './Create';
import './ChannelDetail.css';

class ChannelDetail extends React.Component {
  componentDidMount() {
    const {
      channel = {},
      urlId = '',
      onLoadChannel
    } = this.props;

    if (!channel.message || channel.isPartial) {
      onLoadChannel(urlId);
    }
  }

  render() {
    const { channel = {}, onCreate } = this.props;
    if (!channel.messages) {
      return (<div className="loading-detail">Loading Messages</div>);
    }

    return (
      <div className="channel-detail">
        <h1>{channel.name}</h1>
        <h3>Messages</h3>
        <div className="channel-content">
          {channel.messages.map((message) => (
            <Message message={message} />
          ))}
        </div>
        <Create onCreate={onCreate} channel={channel} />
      </div>
    );
  }
}

ChannelDetail.propTypes = {
  channel: ChannelPropTypes,
  urlId: PropTypes.string.isRequired,
  onLoadChannel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
};

export default ChannelDetail;
