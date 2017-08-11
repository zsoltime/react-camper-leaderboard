import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Board from 'Board';
import 'styles';

const renderComponent = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

renderComponent(Board);

if (module.hot) {
  module.hot.accept(Board, () => { renderComponent(Board); });
}
