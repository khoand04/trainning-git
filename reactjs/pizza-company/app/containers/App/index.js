/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
// eslint-disable-next-line import/order
import LoginPage from '../LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { createTheme, ThemeProvider, Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006a31',
    },
    secondary: {
      main: '#d50e15',
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
