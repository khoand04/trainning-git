import { useState, memo } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { increaseQuantity, deleteCart } from '../../containers/App/actions';
import PropTypes from 'prop-types';
export const ItemCart = props => {
  const { onIncreaseQuantity, onDeleteProductCart } = props;
  const [inputValue, setInputValue] = useState(0);

  return (
    <Card
      sx={{
        width: '100%',
        height: { lg: 120 },
        border: 'none',
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Grid container sx={{ width: '100%' }}>
        <Grid item lg={6} xs={12}>
          <Grid container>
            <Grid item lg={3} xs={4} sm={4} sx={{}}>
              <CardMedia
                component="img"
                sx={{
                  height: { lg: 120, sm: 120 },
                  width: { lg: 120, sm: 120 },
                  paddingTop: { xs: 0, sm: 0 },
                  objectFit: 'contain',
                  float: 'right',
                }}
                image={props.img}
                title="green iguana"
              />
            </Grid>
            <Grid item lg={8} xs={8} sm={6}>
              <CardContent sx={{}}>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ fontSize: '18px' }}
                >
                  <strong>{props.title}</strong>
                </Typography>
                <Typography sx={{ fontSize: '12px' }} color="text.secondary">
                  Kích thước
                </Typography>
                <Typography sx={{ fontSize: '12px' }} color="text.secondary">
                  Đế
                </Typography>
                <Typography sx={{ fontSize: '12px' }} color="text.secondary">
                  Ghi chú
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Grid
            container
            sx={{
              marginTop: { lg: 5, sm: 0 },
            }}
          >
            <Grid item lg={4} xs={4} sm={4}>
              <CardContent
                sx={{
                  height: 36,
                  maxWidth: 120,
                  border: '1px solid #9e9e9e',
                  borderRadius: '5px',
                  padding: '2px',
                  float: { sm: 'right', lg: 'left' },
                }}
              >
                <Button
                  onClick={() => setInputValue(inputValue - 1)}
                  sx={{ minWidth: 24, maxWidth: 24, color: '#9e9e9e' }}
                >
                  <RemoveIcon />
                </Button>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    inputProps: {
                      style: {
                        textAlign: 'center',
                      },
                    },
                  }}
                  sx={{
                    width: '64px',
                    height: '30',
                  }}
                  value={props.quantity}
                  onChange={e => setInputValue(e.target.value)}
                />
                <Button
                  onClick={() => onIncreaseQuantity()}
                  sx={{ minWidth: 24, maxWidth: 24, color: '#9e9e9e' }}
                >
                  <AddIcon />
                </Button>
              </CardContent>
            </Grid>
            <Grid item lg={3} xs={4} sm={3}>
              <Box sx={{}}>
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: '18px',
                    padding: '5px',
                    textAlign: 'center',
                  }}
                >
                  <strong>{props.price}</strong>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={2} xs={2}>
              <CardActions
                sx={{
                  padding: 0,
                }}
              >
                <Button
                  sx={{
                    color: '#9e9e9e',
                    padding: 0,
                  }}
                  onClick={() => {
                    onDeleteProductCart(props);
                  }}
                >
                  <DeleteForeverOutlinedIcon fontSize="large" />
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
ItemCart.propTypes = {
  onIncreaseQuantity: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    onIncreaseQuantity: exp => dispatch(increaseQuantity(exp)),
    onDeleteProductCart: product => dispatch(deleteCart(product)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ItemCart);
