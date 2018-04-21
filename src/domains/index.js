import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  actions as channelsActions,
  selectors as channelsSelectors,
  reducers as channelsReducers
} from './channels';

export const reducers = combineReducers({
  channels: channelsReducers,
  routing: routerReducer
});

export const actions = {
  ...channelsActions
};

export const selectors = {
  ...channelsSelectors
};
