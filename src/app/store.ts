import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homePageReducer from './containers/HomePage/homePageSlice';
import ReduxLogger from 'redux-logger';

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(ReduxLogger)

export const store = configureStore({
  middleware,
  reducer: {
    homePage: homePageReducer
  },
});

// exporting custom types for Typescript to work with
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
