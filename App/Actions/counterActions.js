import * as types from "./ActionTypes";

export function increment(itemId) {
  return {
    type: types.INCREMENT,
    payload:itemId
  };
}

export function decrement(itemId) {
  return {
    type: types.DECREMENT,
    payload: itemId
  };
}
