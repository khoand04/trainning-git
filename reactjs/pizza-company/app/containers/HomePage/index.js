/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { loadRepos } from '../App/actions';
import { changeUsername, AddCart } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Banner from '../../components/HomePage/banner';
import ItemCard from '../../components/HomePage/gird/itemGrid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef } from 'react';
import { useState } from 'react';
import { getCartProduct } from '../../components/DialogCart/cartService';
import { makeSelectProductCart } from '../App/selectors';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  products,
  items,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [visible, setVisible] = React.useState(4);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 4);
    console.log(getCartProduct());
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const customeSlider = useRef();
  const handleNext = () => {
    customeSlider.current.slickNext();
  };

  const handleBack = () => {
    customeSlider.current.slickPrev();
  };

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <Container>
      <Banner />
      <Box
        sx={{
          height: {
            xs: 260,
            lg: 550,
            sm: 560,
          },
          flexGrow: 1,
          marginBottom: 3,
        }}
      >
        <Box>
          <Slider {...settings} ref={customeSlider}>
            {products.salecomboData.slice(0, visible).map(item => {
              return (
                <ItemCard
                  img={item.img}
                  title={item.title}
                  des={item.des}
                  price={item.price}
                />
              );
            })}
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
      <Typography gutterBottom variant="h4" component="div">
        <strong>Thực đơn </strong>
      </Typography>
      <Typography gutterBottom variant="h4" component="div">
        <strong>Pizza </strong>
      </Typography>
      <Grid container spacing={2} gridRow={1}>
        {products.pizzaData.slice(0, visible).map(n => {
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
      <Typography gutterBottom variant="h4" component="div">
        <strong>Vườn Mỹ vị </strong>
      </Typography>
      <Grid container spacing={2} gridRow={1}>
        {products.gardenData.slice(0, visible).map(n => {
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
      <Typography gutterBottom variant="h4" component="div">
        <strong>Khai vị</strong>
      </Typography>
      <Grid container spacing={2} gridRow={1}>
        {products.starterData.slice(0, visible).map(n => {
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
      <Typography gutterBottom variant="h4" component="div">
        <strong>Salad </strong>
      </Typography>
      <Grid container spacing={2} gridRow={1}>
        {products.saladData.slice(0, visible).map(n => {
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
      <Typography gutterBottom variant="h4" component="div">
        <strong>Đồ uống</strong>
      </Typography>
      <Grid container spacing={2} gridRow={1}>
        {products.drinkData.slice(0, visible).map(n => {
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
    </Container>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  items: makeSelectProductCart(),
});

export function mapDispatchToProps(dispatch, props) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
