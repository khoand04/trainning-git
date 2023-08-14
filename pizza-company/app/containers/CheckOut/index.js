/* eslint-disable no-alert */
import React, { useEffect, memo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import ItemCart from '../../components/ItemCart';
import { productCart } from '../App/actions';
import { makeSelectProductCart } from '../App/selectors';
import { Box, Button, Container, Typography } from '@mui/material';
import { OderForm } from '../../components/OderForm';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export function Checkout(props) {
  return (
    <Container sx={{ height: 1000 }}>
      <OderForm />
      <Box sx={{ float: 'right', marginTop: 5 }}>
        <Button
          variant="contained"
          component={Link}
          to={'/'}
          sx={{ margin: 2 }}
        >
          Tiếp tục
        </Button>
        <Button
          variant="contained"
          component={Link}
          to={'/cart'}
          sx={{ margin: 2 }}
        >
          Thanh toán
        </Button>
      </Box>
    </Container>
  );
}
Checkout.propTypes = { cart: PropTypes.arrayOf() };

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  cart: makeSelectProductCart(),
});

export function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Checkout);
