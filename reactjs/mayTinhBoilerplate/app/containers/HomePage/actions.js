/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  LOAD_EXP,
  CAL_EXPRESSION,
  LOAD_BUTTON,
  LOAD_CLEAR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
export function loadExp(str) {
  return {
    type: LOAD_EXP,
    str,
  };
}
export function loadButton(button) {
  return {
    type: LOAD_BUTTON,
    button,
  };
}

export function calExpression(expression) {
  return {
    type: CAL_EXPRESSION,
    expression,
  };
}
export function loadClear(clear) {
  return {
    type: LOAD_CLEAR,
    clear,
  };
}
