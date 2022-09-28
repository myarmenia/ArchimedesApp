import {configureStore, combineReducers} from '@reduxjs/toolkit';
import nameReducer from './slice';

const rootReducers = combineReducers({
  auth: nameReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export default store;
