import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userDataReducer from '../features/userData/userDataSlice';
import postQuoteReducer from '../features/postQuote/postQuoteSlice';

const persistConfig = {
  key: 'userData',
  version: 1,
  storage,
};

const persistedUserDataReducer = persistReducer(persistConfig, userDataReducer);

const store = configureStore({
  reducer: {
    userData: persistedUserDataReducer,
    postQuote: postQuoteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
