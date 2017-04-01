/* application store */
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//
const history = createHistory();
const middleware = routerMiddleware(history);

import { reducers } from './reducers';
export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(middleware),
));

import * as firstActions from './first/actions';
/* use these helpers only if you aren'o't use react-redux, ie dispatching actions manually/... */
export const add = value =>
  store.dispatch(firstActions.add(value));

// testing:
store.subscribe(() => {
  if ('development' !== process.env.NODE_ENV) return;
  console.log('debug store:', JSON.stringify(store.getState()));
});
