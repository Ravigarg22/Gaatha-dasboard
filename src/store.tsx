import { persistStore } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reduxOperations/index.ts';

const enhancer = compose(applyMiddleware(thunk));

const configureStore = () => {
  const store = createStore(reducer, undefined, enhancer);

  const persistor = persistStore(store);
  return { persistor, store };
};

export const { persistor, store } = configureStore();
