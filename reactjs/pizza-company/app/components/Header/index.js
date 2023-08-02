import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Link from '@mui/material/Link';

function Header() {
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
            Mì Ý
          </Typography>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            Salad
          </Typography>
          <Link href="/login" color="inherit">
            Đăng nhập
          </Link>

          <Box component="span" m={1}>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ShoppingCartCheckoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
