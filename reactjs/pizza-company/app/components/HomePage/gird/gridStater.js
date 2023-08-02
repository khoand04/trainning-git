import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import dataStarter from './data/dataStarter.json'

export const GridStater = () => {
  const [items, setItems] = React.useState([]);
  const [visible, setVisible] = React.useState(4);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 4);
  };

  useEffect(() => {
    setItems(dataStarter);
  }, []);

  return (
    <div>
      <Grid container spacing={2} gridRow={1}>
        {items.slice(0, visible).map(n => (
          <Grid item sm={3}>
            <Card sx={{ maxWidth: 345, height: 480 }}>
              <CardMedia
                sx={{ height: 257 }}
                image={n.img}
                title="green iguana"
              />
              <CardContent sx={{ height: 120 }}>
                <Typography gutterBottom variant="p" component="div">
                  <strong>{n.title.toString()} </strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n.des.toString()}
                </Typography>
              </CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Giá chỉ từ
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      <strong>{n.price.toString()}</strong>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box sx={{ marginTop: '10px' }}>
                    <CardActions>
                      <Button variant="outlined">Mua ngay</Button>
                    </CardActions>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
        <Button
          variant="text"
          sx={{ width: '100%', marginTop: 3, marginBottom: 3 }}
          onClick={showMoreItems}
        >
          <Typography variant="body2" color="text.secondary">
            Xem thêm +
          </Typography>
        </Button>
      </Grid>
    </div>
  );
};

export default GridStater;
