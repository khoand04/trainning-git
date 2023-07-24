/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
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
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import calculatorResult from './ButtonCal';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
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
    console.log(text);
  };

  const clearInput = () => {
    setText('');
  };

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: 500,
          height: 500,
          marginTop: 6,
        }}
      >
        <Box
          sx={{
            width: 500,
            height: 115,
            display: 'flex',
            flexDirection: 'column',
            
          }}
        >
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            value={text}
            variant="filled"
            p
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            value={expression}
            variant="filled"
          />
        </Box>
        <Box
          sx={{
            width: 500,
            height: 60,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {[
            { id: 0, number: 1 },
            { id: 2, number: 2 },
            { id: 3, number: 3 },
            { id: 4, number: '+' },
          ].map(n => (
            <Button
              variant="outlined"
              style={{
                maxWidth: '125px',
                maxHeight: '60px',
                minWidth: '125px',
                minHeight: '60px',
              }}
              key={n.id}
              onClick={() => onLoadButton(addToText(n.number.toString()))}
            >
              {n.number}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            width: 500,
            height: 60,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {[
            { id: 0, number: 4 },
            { id: 2, number: 5 },
            { id: 3, number: 6 },
            { id: 4, number: '-' },
          ].map(n => (
            <Button
              variant="outlined"
              style={{
                maxWidth: '125px',
                maxHeight: '60px',
                minWidth: '125px',
                minHeight: '60px',
              }}
              key={n.id}
              onClick={() => onLoadButton(addToText(n.number.toString()))}
            >
              {n.number}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            width: 500,
            height: 60,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {[
            { id: 0, number: 7 },
            { id: 2, number: 8 },
            { id: 3, number: 9 },
            { id: 4, number: '*' },
          ].map(n => (
            <Button
              variant="outlined"
              style={{
                maxWidth: '125px',
                maxHeight: '60px',
                minWidth: '125px',
                minHeight: '60px',
              }}
              key={n.id}
              onClick={() => onLoadButton(addToText(n.number.toString()))}
            >
              {n.number}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            width: 500,
            height: 60,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Button
            variant="outlined"
            style={{
              maxWidth: '125px',
              maxHeight: '60px',
              minWidth: '125px',
              minHeight: '60px',
            }}
            onClick={() => onLoadButton(addToText(''))}
          >
            0
          </Button>
          <Button
            style={{
              maxWidth: '125px',
              maxHeight: '60px',
              minWidth: '125px',
              minHeight: '60px',
            }}
            variant="outlined"
            color="error"
            onClick={() => {
              onClearText(expression);
              clearInput();
            }}
          >
            AC
          </Button>

          <Button
            style={{
              maxWidth: '125px',
              maxHeight: '60px',
              minWidth: '125px',
              minHeight: '60px',
            }}
            color="success"
            variant="contained"
            onClick={() => {
              onCalExp(calculatorResult(text));
            }}
          >
            =
          </Button>
          <Button
            variant="outlined"
            style={{
              maxWidth: '125px',
              maxHeight: '60px',
              minWidth: '125px',
              minHeight: '60px',
            }}
            onClick={() => onLoadButton(addToText('/'))}
          >
            /
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
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
