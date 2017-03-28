import React from 'react';
import { render } from 'react-dom';

import Header from 'Header';
import Board from 'Board';
import Footer from 'Footer';
import 'styles';

render(
  <div>
    <Header />
    <Board />
    <Footer />
  </div>,
  document.getElementById('app')
);
