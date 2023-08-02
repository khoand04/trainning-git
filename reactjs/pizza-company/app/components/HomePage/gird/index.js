import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dataSaleCombo from './data/sliderSale.json';

export const Resizable = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const customeSlider = useRef();
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    setItems(dataSaleCombo);
  }, []);

  const handleNext = () => {
    customeSlider.current.slickNext();
  };

  const handleBack = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <div>
      <Box sx={{ width: '100%', height: 520, flexGrow: 1, marginBottom: 3 }}>
        <Box sx={{ display: '' }}>
          <Slider {...settings} ref={customeSlider}>
            {items.map(n => (
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
            ))}
          </Slider>
        </Box>
        <Box
          sx={{
            marginTop: '-250px',
            marginLeft: '-100px',
            marginRight: '-100px',
          }}
        >
          <Button size="small" onClick={handleBack}>
            <ArrowBackIcon />
          </Button>

          <Button sx={{ float: 'right' }} size="small" onClick={handleNext}>
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Resizable;
