import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link as UiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { memo } from 'react';
import { compose } from 'redux';
import HeaderLink from './HeaderLink';
import { makeSelectNumberCart } from '../../containers/App/selectors';

function Header({ numberCart }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            Khuyến mãi
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            #unBox
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            Pizza
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            Gà giòn
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            Khai vị
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            Salad
          </Typography>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/cart" sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                background: '#fff',
                borderRadius: '20px',
                height: 40,
                paddingLeft: 2,
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="default"
                aria-label="menu"
              >
                <ShoppingCartCheckoutIcon />
                <Box sx={{ fontSize: 15, mr: 1 }}>Giỏ hàng </Box>
                <Box
                  sx={{
                    fontSize: 15,
                    background: 'secondary',
                    borderRadius: 4,
                  }}
                >
                  {numberCart}
                </Box>
              </IconButton>
            </Box>
          </HeaderLink>
          <HeaderLink to="/login">Đăng nhập</HeaderLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const mapStateToProps = createStructuredSelector({
  numberCart: makeSelectNumberCart(),
});
const withConnect = connect(mapStateToProps);
export default compose(
  withConnect,
  memo,
)(Header);
