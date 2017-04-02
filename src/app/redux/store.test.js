import { store } from './store';

// testing:
store.subscribe(() => {
  if (process.env.ENV && 'development' !== process.env.ENV) return;
  console.log('debug store:', JSON.stringify(store.getState()));
});
