import { optional } from './util';
import { types } from './types';

export const reducer = (currentState = 0, action) => {

  const state = optional(currentState);

  if (!action) {
    return state;
  }

  const payload = optional(action.payload);

  switch(action.type) {

    case types.ADD:
      return optional(state + payload);

    default:
      return state;
  }
};
