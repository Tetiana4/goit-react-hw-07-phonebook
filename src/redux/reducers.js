import * as actions from './actions';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const reducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [actions.filterContact]: (_state, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  contacts: reducer,
  filter,
});