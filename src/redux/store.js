import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contacts/options';

import { filter } from './contacts/reducers';

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
