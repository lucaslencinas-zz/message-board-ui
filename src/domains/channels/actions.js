import * as actions from './actionTypes';
import * as channelService from '../../services/channelService';
import * as selectors from './selectors';

export function fetchChannels() {
  return (dispatch) => (
    channelService.list()
      .then((channels) => (
        dispatch({
          type: actions.FETCH_CHANNELS_SUCCESS,
          channels
        })
      ))
  );
}

export function fetchChannel(channelId) {
  return (dispatch, getState) => {
    const state = getState();
    const channel = selectors.channel(state, { id: channelId });

    if (channel && !channel.isPartial) {
      return channel;
    }

    return channelService.get(channelId)
      .then((completedChannel) => (
        dispatch({
          type: actions.FETCH_CHANNEL_SUCCESS,
          channel: { ...completedChannel }
        })
      ));
  };
}

export function createMessage(channel, message) {
  return (dispatch) =>
    channelService.createMessage(channel.id, message)
      .then((createdMessage) => {
        console.log(createdMessage);

        return dispatch({
          type: actions.CREATE_MESSAGE_SUCCESS,
          channel,
          message: { ...createdMessage }
        });
      });
}
