import { store } from './store';

// testing:
store.subscribe(() => {
  if ('development' !== process.env.NODE_ENV) return;
  console.log('debug store:', JSON.stringify(store.getState()));
});
