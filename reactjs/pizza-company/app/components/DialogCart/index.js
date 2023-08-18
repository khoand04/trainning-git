import {
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { addToCart } from '../../containers/App/actions';
import { makeAddToProduct } from '../../containers/App/selectors';
export function DialogCart(props) {
  const { open, onClose, submitData, onAddtoCart } = props;
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClose = () => {
    onClose(false);
  };

  const product_current = {
    id: props.id,
    title: props.title,
    img: props.img,
    price: props.price,
  };

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={'lg'}
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <Card
          sx={{
            width: '100%',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 0,
          }}
        >
          <Grid container sx={{ width: '90%' }}>
            <Grid item sm={6} xs={12}>
              <CardMedia
                component="img"
                sx={{
                  paddingTop: { xs: 0, sm: 0 },
                }}
                image={props.img}
                title="green iguana"
              />
              <Typography
                variant="h4"
                color="secondary"
                sx={{ textAlign: 'center' }}
              >
                <strong>{props.price}</strong>
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12} p={5}>
              <Typography sx={{ fontSize: 24, marginBottom: 5 }}>
                <strong>{props.title}</strong>
              </Typography>
              <Typography sx={{ fontSize: 16, marginBottom: 5 }}>
                {props.des}
              </Typography>
              <Typography sx={{ fontSize: 24, marginBottom: 2 }}>
                Ghi chú
              </Typography>
              <TextareaAutosize minRows={3} style={{ width: '100%' }} />
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: '4px',
                  width: '100%',
                  marginTop: 5,
                }}
                onClick={() => {
                  handleClose(onAddtoCart(product_current));
                }}
                open="false"
              >
                <Typography variant="">Thêm vào giỏ hàng</Typography>
              </Button>
            </Grid>
          </Grid>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
DialogCart.propTypes = {
  onAddtoCart: PropTypes.func,
};

const mapStateToProps = () => {
  return {};
};
export function mapDispatchToProps(dispatch) {
  return {
    onAddtoCart: product => dispatch(addToCart(product)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(withConnect)(DialogCart);
