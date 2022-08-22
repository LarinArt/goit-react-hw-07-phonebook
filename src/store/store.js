import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts-slice';
import contactsSlice from './contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
