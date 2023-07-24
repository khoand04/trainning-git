/* eslint-disable no-const-assign */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import {
  changeUsername,
  loadButton,
  loadClear,
  calExpression,
} from './actions';
import { makeSelectUsername, makeCalExpression } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.css';
import calculatorResult from './ButtonCal';

const key = 'home';

export function HomePage({
  username,
  onSubmitForm,
  onCalExp,
  onLoadButton,
  expression,
  onClearText,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [text, setText] = React.useState('');
  const addToText = button => {
    setText(`${text}${button}`);
  };

  const clearInput = () => {
    setText('');
  };
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <div>
      <div className="Wrapper">
        <div className="Cal">
          <div className="input">
            <div className="text">{text}</div>
            <div className="result">{expression}</div>
          </div>
          <div className="row">
            {[
              { id: 0, number: 1 },
              { id: 2, number: 2 },
              { id: 3, number: 3 },
              { id: 4, number: '+' },
            ].map(n => (
              <button
                key={n.id}
                type="button"
                className="button"
                onClick={() => onLoadButton(addToText(n.number.toString()))}
              >
                {n.number}
              </button>
            ))}
          </div>
          <div className="row">
            {[
              { id: 0, number: 4 },
              { id: 2, number: 5 },
              { id: 3, number: 6 },
              { id: 4, number: '-' },
            ].map(n => (
              <button
                key={n.id}
                type="button"
                className="button"
                onClick={() => onLoadButton(addToText(n.number.toString()))}
              >
                {n.number}
              </button>
            ))}
          </div>
          <div className="row">
            {[
              { id: 0, number: 7 },
              { id: 2, number: 8 },
              { id: 3, number: 9 },
              { id: 4, number: '*' },
            ].map(n => (
              <button
                key={n.id}
                type="button"
                className="button"
                onClick={() => onLoadButton(addToText(n.number.toString()))}
              >
                {n.number}
              </button>
            ))}
          </div>
          <div className="row">
            <button
              type="button"
              className="button"
              onClick={() => onLoadButton(addToText(''))}
            />
            <button
              type="button"
              className="button"
              onClick={() => {
                onClearText(expression);
                clearInput();
              }}
            >
              AC
            </button>
            <button
              type="button"
              className="button"
              onClick={() => {
                onCalExp(calculatorResult(text));
              }}
              
            >
              =
            </button>
            <button
              type="button"
              className="button"
              onClick={() => onLoadButton(addToText('/'))}
            >
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
  onCalExp: PropTypes.func,
  expression: PropTypes.string,
  onLoadButton: PropTypes.func,
  onClearText: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  expression: makeCalExpression(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onCalExp: evt => dispatch(calExpression(evt)),
    onLoadButton: btn => dispatch(loadButton(btn)),
    onClearText: txt => dispatch(loadClear(txt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
