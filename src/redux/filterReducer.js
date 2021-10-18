import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

export const filter = createReducer('', {
  [actions.filterContact]: (_state, { payload }) => {
    return payload;
  },
});
