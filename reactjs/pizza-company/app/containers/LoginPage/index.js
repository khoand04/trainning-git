/* eslint-disable no-alert */
import React, { useEffect, memo, useState, useRef } from 'react';
import PropTypes, { number } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectNumberPhone,
  makeSelectPassword,
} from 'containers/App/selectors';
import Link from '@mui/material/Link';
import { loadRepos } from '../App/actions';
import { checkNumberPhone, checkPassword } from '../App/actions';
//import { makeSelectUsername } from '../App/selectors';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import HomePage from '../HomePage';

export function LoginPage({ checkNumberPhone, checkPassword }) {
  useEffect(() => {}, []);
  const rnPhone = useRef(null);
  const rpassword = useRef(null);

  const validationSchema = yup.object({
    number: yup
      .number('Enter your number phone')
      .min(10, 'Enter a valid email')
      .required('Number Phone is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      number: '09244636',
      password: 'foobar111',
    },
    validationSchema,
    onSubmit: values => {
      if (values.number == '0942185341' && values.password == '@12345678*') {
        localStorage.setItem('numberData', '0942185341');
        localStorage.setItem('password', '@12345678*');
      }
    },
  });
  const getNPhone = localStorage.getItem('numberData');
  const getPassword = localStorage.getItem('password');
  return (
    <div>
      {getNPhone && getPassword ? (
        <HomePage />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <Container component="main" maxWidth="sm">
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                px: 4,
                py: 6,
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
              }}
            >
              <Typography component="strong" variant="h4">
                Đăng nhập
              </Typography>

              <Typography component="strong" variant="p">
                Số điện thoại
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="numberPhone"
                name="number"
                type="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
                placeholder="Nhập số điện thoại của bạn tại đây"
                sx={{
                  pl: { fontStyle: 'italic' },
                }}
              />

              <Typography component="strong" variant="p">
                Mật khẩu
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                autoComplete="current-password"
                placeholder="Nhập mật khẩu của bạn tại đây"
                sx={{
                  pl: { fontStyle: 'italic' },
                }}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {'Bạn đã có tài khoản? Tạo tài khoản'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </form>
      )}
    </div>
  );
}
LoginPage.propTypes = {
  checkNumberPhone: PropTypes.string,
  checkPassword: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  numberPhone: makeSelectNumberPhone(),
  password: makeSelectPassword(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadNumberPhone: evt => dispatch(checkNumberPhone(evt)),
    onLoadPassword: evt => dispatch(checkPassword(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
