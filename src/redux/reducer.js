import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const reducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts: reducer,
  filter,
});

// redux

// const reducer = (state = [], { type, payload }) => {
//   // console.log(payload);
//   // console.log('log: ', payload);
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts: reducer,
//   filter,
// });
