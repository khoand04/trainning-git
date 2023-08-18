/* eslint-disable no-alert */
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import ItemCart from '../../components/ItemCart';
import { makeSelectProductCart } from '../App/selectors';

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
        <Button variant="contained" component={Link} to="/" sx={{ margin: 2 }}>
          Tiếp tục mua hàng
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/checkout"
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
