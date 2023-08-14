import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ItemCard from './gird/itemGrid';

const GirdProduct = props => {
  const [visible, setVisible] = React.useState(4);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 4);
  };
  return (
    <Grid container spacing={2} gridRow={1}>
      {props.slice(0, visible).map(n => {
        return (
          <ItemCard img={n.img} title={n.title} des={n.des} price={n.price} />
        );
      })}
      <Button
        variant="text"
        sx={{
          width: '100%',
          marginTop: 2,
          marginBottom: 3,
          background: '#F5F5F5',
        }}
        onClick={showMoreItems}
      >
        <Typography variant="body2" color="text.secondary">
          Xem thêm +
        </Typography>
      </Button>
    </Grid>
  );
};

export default GirdProduct;
