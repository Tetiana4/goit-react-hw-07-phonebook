import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filter } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
