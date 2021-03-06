import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import entriesReducer from '../reducers/entries';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      auth: authReducer,
      filters: filtersReducer,
    }),
    applyMiddleware(thunk)
  );

  return store;
};
