import React from 'react';
// import PropTypes from 'prop-types';
import { MessagePropTypes } from '../../commons/BoardPropTypes';
import './Message.css';

class Message extends React.Component {
  render() {
    const { message = {} } = this.props;
    return (
      <div className="message">
        <div className="message-name">{message.name}</div>
        <div className="message-content">
          {message.content}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  message: MessagePropTypes
};

export default Message;
