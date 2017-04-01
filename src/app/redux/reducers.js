/* combine reducer */
import { combineReducers } from 'redux';
import { reducer as first } from './first/reducer';
// import { reducer as second } from './second/reducer';
// import { reducer as third } from './third/reducer';
// ...

export const reducers = combineReducers({
  first,
  // second,
  // third,
  // ...
});
