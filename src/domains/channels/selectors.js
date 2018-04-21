import { createSelector } from 'reselect';

const channelsKeys = (state) => state.channels.list;
const channelsData = (state) => state.channels.data;

export const channels = createSelector(
  channelsKeys,
  channelsData,
  ($keys, $channels) => $keys.map((key) => $channels[key])
);

export const channel = createSelector(
  (state, props) => props.id,
  channelsData,
  (channelId, $channels) => $channels[channelId]
);
