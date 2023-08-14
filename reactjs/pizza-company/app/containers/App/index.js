/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
// eslint-disable-next-line import/order
import LoginPage from '../LoginPage/Loadable';
import CartPage from '../CartPage/Loadable';
import CheckOut from '../CheckOut/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { createTheme, ThemeProvider, Container } from '@mui/material';
import data from '../../components/HomePage/gird/data/dataPizza';
import DialogCart from '../../components/DialogCart';

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
    h2: '30px',
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}>
            <HomePage products={products} />
            <DialogCart products={products} />
          </Route>
          <Route path="/login" component={LoginPage}/>
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
