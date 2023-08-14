/* eslint-disable no-alert */
import React, { useEffect, memo, useState, useRef } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

export function OderForm({ items }) {
  return (
    <div>
      <Grid container sx={{ height: 450, width: '100%' }}>
        <Box
          sx={{
            boxShadow: 1,
            width: '100%',
            bgcolor: theme =>
              theme.palette.mode === 'dark' ? '#101010' : '#fff',
            color: theme =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            marginTop: 3,
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            paddingBottom: '10px',
            p: 2,
          }}
        >
          <Grid items sm={12} xs={12}>
            <Typography
              sx={{
                fontSize: '22px',
                borderBottom: 'solid 1px #1111',
                paddingTop: '5px',
              }}
            >
              <strong>Hình thức đặt hàng</strong>
            </Typography>
            <Typography
              sx={{
                paddingTop: '5px',
              }}
            >
              Quý khách vui lòng lựa chọn phương thức đặt hàng phù hợp
            </Typography>
            <Typography
              sx={{
                paddingTop: '5px',
              }}
            >
              Quý khách có thể chọn Đặt giao hàng tận nơi hoặc Đặt đến lấy trực
              tiếp tại chi nhánh nhà hàng gần nhất.
            </Typography>
          </Grid>
        </Box>
        <Grid items sm={6} xs={12}>
          <Box
            sx={{
              boxShadow: 2,
              bgcolor: theme =>
                theme.palette.mode === 'dark' ? '#101010' : '#fff',
              color: theme =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              marginTop: 3,
              borderRadius: 2,
              marginRight: 2,
            }}
          >
            <Card sx={{ height: 260, padding: 2 }}>
              <Grid container>
                <Grid item sm={4}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: { lg: 120, sm: 120 },
                      width: { lg: 120, sm: 120 },
                      paddingTop: { xs: 0, sm: 0 },
                      objectFit: 'contain',
                    }}
                    image="https://thepizzacompany.vn/images/hinhthuc_1.png"
                    title="green iguana"
                  />
                </Grid>
                <Grid item sm={8}>
                  <CardContent sx={{}}>
                    <Typography
                      variant="h5"
                      color={'primary'}
                      sx={{
                        borderBottom: 'solid 1px #1111',
                      }}
                    >
                      <strong>Đặt giao hàng</strong>
                    </Typography>
                    <Typography
                      sx={{ fontSize: '14px', paddingTop: 2 }}
                      color="text.secondary"
                    >
                      Giao hàng tận nơi với đơn hàng thực thanh toán từ
                      100.000đ. Phụ thu phí giao hàng từ 25,000đ cho mỗi đơn đặt
                      hàng qua Hotline 19006066 hoặc Website, bao gồm hóa đơn có
                      các sản phẩm thuộc chương trình khuyến mại
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>

        <Grid items sm={6} xs={12}>
          <Box
            sx={{
              boxShadow: 3,
              bgcolor: theme =>
                theme.palette.mode === 'dark' ? '#101010' : '#fff',
              color: theme =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              marginTop: 3,
              borderRadius: 2,
            }}
          >
            <Card sx={{ height: 260, padding: 2 }}>
              <Grid container>
                <Grid item sm={4}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: { lg: 120, sm: 120 },
                      width: { lg: 120, sm: 120 },
                      paddingTop: { xs: 0, sm: 0 },
                      objectFit: 'contain',
                    }}
                    image="https://thepizzacompany.vn/images/hinhthuc_2.png"
                    title="green iguana"
                  />
                </Grid>
                <Grid item sm={8}>
                  <CardContent sx={{}}>
                    <Typography
                      variant="h5"
                      color={'primary'}
                      sx={{
                        borderBottom: 'solid 1px #1111',
                      }}
                    >
                      <strong>Đặt đến lấy</strong>
                    </Typography>
                    <Typography
                      sx={{ fontSize: '14px' }}
                      color="text.secondary"
                    >
                      Nhận đơn hàng của bạn tại
                    </Typography>
                    <Typography
                      sx={{ fontSize: '14px' }}
                      color="text.secondary"
                    >
                      <strong>Nhà hàng The Pizza Company</strong>
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});

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
)(OderForm);
