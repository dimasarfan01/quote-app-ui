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
import { getQuoteDataApi } from '../services/quote';

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
    [getQuoteDataApi.reducerPath]: getQuoteDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(getQuoteDataApi.middleware),
});

export default store;
