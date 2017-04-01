/* use these helpers only if you aren'o't use react-redux, ie dispatching actions manually/... */
import { store } from './store';
import * as firstActions from './first/actions';

export const add = value =>
  store.dispatch(firstActions.add(value));

export const mul = value =>
  store.dispatch(firstActions.mul(value));
