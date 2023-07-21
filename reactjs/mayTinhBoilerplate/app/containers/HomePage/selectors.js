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
const makeLoadButton = () =>
  createSelector(
    selectHome,
    homeState => homeState.button,
  );
const makeLoadExp = () =>
  createSelector(
    selectHome,
    homeState => homeState.str,
  );
const makeCalExpression = () =>
  createSelector(
    selectHome,
    homeState => homeState.expression,
  );
const makeClearText = () =>
  createSelector(
    selectHome,
    homeState => homeState.expression,
  );
export {
  selectHome,
  makeSelectUsername,
  makeCalExpression,
  makeLoadButton,
  makeClearText,
  makeLoadExp,
};
