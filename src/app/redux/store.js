/* application store */
//
// // const devtools =
// //   window.__REDUX_DEVTOOLS_EXTENSION__
// //   && window.__REDUX_DEVTOOLS_EXTENSION__();
// //
// // export const store = createStore(reducers, devtools);
//
// import { createStore, applyMiddleware } from 'redux';
// export const store = createStore(reducers, composeWithDevTools(
//   applyMiddleware(middleware),
// ));

import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducers } from './reducers';

export const store = createStore(reducers, devToolsEnhancer());
