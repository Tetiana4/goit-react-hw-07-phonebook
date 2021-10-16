import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactApi } from './contactsSlice';

const contactPersistConfig = {
  key: 'contacts',
  storage,
  blackList: ['filter'],
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, reducer),
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export const persistor = persistStore(store);
