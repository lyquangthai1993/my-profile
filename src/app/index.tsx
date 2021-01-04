/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/tailwind.scss';
import { GlobalStyle } from '../styles/global-styles';

// import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { Home } from './containers/Home/Loadable';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Footer from './components/Footer';

export function App() {
  console.log('------process', process.env);
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Masterise Home" defaultTitle="Masterise Home">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        {/*<Route exact path={process.env.PUBLIC_URL + '/home'} component={Home} />*/}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
