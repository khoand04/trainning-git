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
import { Link } from 'react-router-dom/cjs/react-router-dom';

export function CartPage({ items }) {
  return (
    <Container sx={{ height: 1000, paddingTop: 5 }}>
      <Typography variant="h5">
        <strong>Sản phẩm</strong>
      </Typography>
      {items.map((item, key) => (
        <ItemCart
          key={key}
          img={item.img}
          title={item.title}
          des={item.des}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <Box sx={{ float: 'right', marginTop: 5 }}>
        <Button
          variant="contained"
          component={Link}
          to={'/'}
          sx={{ margin: 2 }}
        >
          Tiếp tục mua hàng
        </Button>
        <Button
          variant="contained"
          component={Link}
          to={'/checkout'}
          sx={{ margin: 2 }}
        >
          Thanh toán
        </Button>
      </Box>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  items: makeSelectProductCart(),
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
)(CartPage);
