/* application store */
import { createStore } from 'redux';
import { reducers } from './reducers';

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducers, devtools);

import * as firstActions from './first/actions';
/* use these helpers only if you aren'o't use react-redux, ie dispatching actions manually/... */
export const add = value =>
  store.dispatch(firstActions.add(value));

// testing:
store.subscribe(() => {
  if (!DEVELOPMENT) return;
  console.log('debug store:', JSON.stringify(store.getState()));
});
