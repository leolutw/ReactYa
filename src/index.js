import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('app');

const renderApp = () => {
  const ButtonValue = require('./ButtonValue')
  const Operator = require('./Operator')
  const Result = require('./Result')
  render(
    <AppContainer>
      <Result />
    </AppContainer>,
    rootElement
  );
};

renderApp(rootElement);

if (module.hot) {
  module.hot.accept(
    './Result.js',
    () => renderApp(rootElement)
  );
}