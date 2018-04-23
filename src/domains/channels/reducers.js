import * as actions from './actionTypes';

const initialState = {
  list: [],
  data: {}
};

const buildChannelsHashMap = (channelsList) => (
  channelsList.reduce((acum, channel) => ({
    ...acum,
    [channel.id]: {
      ...channel,
      isPartial: true
    }
  }), {})
);

export default function channelsReducer(state = initialState, action) {
  let channel;

  switch (action.type) {
    case actions.FETCH_CHANNELS_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.channels.map((fetchedChannel) => fetchedChannel.id)),
        data: {
          ...state.data,
          ...buildChannelsHashMap(action.channels)
        }
      };

    case actions.FETCH_CHANNEL_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.channel.id]: { ...action.channel, isPartial: false }
        }
      };

    case actions.CREATE_MESSAGE_SUCCESS:
      channel = state.data[action.channel.id];

      return {
        ...state,
        data: {
          ...state.data,
          [action.channel.id]:
            { ...action.channel, messages: channel.messages.concat([action.message]) }
        }
      };

    default:
      return state;
  }
}
