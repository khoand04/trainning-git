import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid } from '@mui/material';
import DialogCart from '../../DialogCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

export const ItemCard = products => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      item
      sm={3}
      sx={{
        borderTop: { xs: '1px solid grey', lg: 'none', sm: 'none' },
        marginTop: { xs: 3 },
      }}
    >
      <Card
        sx={{
          maxWidth: {},
          height: { lg: 520, sm: 480, xs: 260 },
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={5} md={12} sm={12} sx={{ flexWrap: 'wrap' }}>
            <CardMedia
              component="img"
              sx={{
                height: { lg: 300, sm: 200, xs: 200 },
                width: { lg: 250, sm: 150, xs: 150 },
                paddingTop: { xs: 5, sm: 0 },
                objectFit: 'contain',
              }}
              image={products.img}
              title="green iguana"
            />
          </Grid>
          <Grid item xs={7} md={12} sm={12}>
            <CardContent sx={{ height: 140 }}>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ height: 30 }}
              >
                <strong>{products.title} </strong>
              </Typography>
              <Typography
                sx={{ paddingTop: 2, fontSize: '12px' }}
                color="text.secondary"
              >
                {products.des.lenght <= 110
                  ? products.des
                  : products.des.substr(0, 110) + '...'}
              </Typography>
            </CardContent>

            <Grid container spacing={1}>
              <Grid item md={12} lg={6}>
                <CardContent
                  sx={{
                    p: 0,
                    '&:last-child': { pb: 0 },
                    paddingLeft: '16px',
                    paddingTop: '16px',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Giá chỉ từ
                  </Typography>
                  <Typography gutterBottom fontSize="20px" component="div">
                    <strong>{products.price.toString()}</strong>
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item md={12} lg={6}>
                <Box
                  sx={{
                    marginTop: { lg: '15px', md: 0 },
                    maxHeight: 36,
                    minWidth: 115,
                  }}
                >
                  <CardActions sx={{}}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ borderRadius: '4px' }}
                      color="primary"
                      onClick={() => handleOpen({ products })}
                    >
                      <Typography variant="">Mua ngay </Typography>
                      <ArrowForwardIcon fontSize="small" />
                    </Button>
                    <DialogCart
                      open={open}
                      id={products.id}
                      img={products.img}
                      title={products.title}
                      des={products.des}
                      price={products.price}
                      onClose={handleClose}
                    />
                  </CardActions>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};



export default ItemCard;
