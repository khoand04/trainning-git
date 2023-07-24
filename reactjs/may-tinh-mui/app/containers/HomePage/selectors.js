/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeCalExpression = () =>
  createSelector(
    selectHome,
    homeState => homeState.expression,
  );

export { selectHome, makeSelectUsername, makeCalExpression };
