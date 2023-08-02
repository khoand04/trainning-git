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
import { Container, Typography } from '@mui/material';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Resizable } from '../../components/HomePage/gird';
import Items from '../../components/HomePage/gird/girdPizza';
import GridDrinks from '../../components/HomePage/gird/gridDrinks';
import GirdGarden from '../../components/HomePage/gird/gridGarden';
import GridSalad from '../../components/HomePage/gird/gridSalad';
import GridStater from '../../components/HomePage/gird/gridStater';
import Banner from '../../components/HomePage/banner';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
    <Container>
      <Banner />
      <Resizable />
      <Typography gutterBottom variant="h4" component="div">
        <strong>Thực đơn </strong>
      </Typography>
      <Typography gutterBottom variant="h4" component="div">
        <strong>Pizza </strong>
      </Typography>
      <Items />
      <Typography gutterBottom variant="h4" component="div">
        <strong>Vườn Mỹ vị </strong>
      </Typography>
      <GirdGarden />
      <Typography gutterBottom variant="h4" component="div">
        <strong>Khai vị</strong>
      </Typography>
      <GridStater />
      <Typography gutterBottom variant="h4" component="div">
        <strong>Salad </strong>
      </Typography>
      <GridSalad />
      <Typography gutterBottom variant="h4" component="div">
        <strong>Đồ uống</strong>
      </Typography>
      <GridDrinks />
    </Container>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
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
