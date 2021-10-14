import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('add/Contact', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

export const deleteContact = createAction('delete/Contact');

export const filterContact = createAction('changeFilter/Contact');

// redux

// export const filterContact = value => ({
//   type: FILTER,
//   payload: value,
// });

// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const addContact = data => ({
//   type: ADD,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });
