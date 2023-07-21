/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_USERNAME,
  LOAD_EXP,
  CAL_EXPRESSION,
  LOAD_BUTTON,
  LOAD_CLEAR,
} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  str: '',
  expression: '',
  button: '',
  clear: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case LOAD_BUTTON:
        draft.button = action.button;
        break;
      case LOAD_EXP:
        draft.str = action.str;
        break;
      case CAL_EXPRESSION:
        draft.expression = action.expression;
        break;

      case LOAD_CLEAR:
        draft.expression = '';
        break;
    }
  });

export default homeReducer;
