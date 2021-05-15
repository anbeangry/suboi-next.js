import React from 'react';
import PropTypes from 'prop-types';
import '../app/styles/base/_base.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
