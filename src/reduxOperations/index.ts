import storage from 'redux-persist/lib/storage';
import { persistCombineReducers } from 'redux-persist';

import auth from './auth';
import dashboard from './dashboard';
import subscriptions from './subscriptions';
import transactions from './transactions';

const config = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};

const appReducer = {
  auth,
  dashboard,
  subscriptions,
  transactions,
};

export default persistCombineReducers(config, appReducer);
