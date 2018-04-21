import PropTypes from 'prop-types';

const ChannelPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(MessagePropTypes)
});

const MessagePropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
});

export {
  ChannelPropTypes,
  MessagePropTypes
};
