import { types } from './types';
import { optional } from './util';

export const add = value => ({
  type: types.ADD,
  payload: optional(value),
});

export const mul = value => ({
  type: types.MUL,
  payload: optional(value),
});
