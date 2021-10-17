import * as actions from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const filter = createReducer('', {
  [actions.filterContact]: (_state, { payload }) => {
    return payload;
  },
});
