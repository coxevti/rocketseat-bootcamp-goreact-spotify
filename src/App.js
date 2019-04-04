import React, { Fragment } from 'react';
import Sidebar from './components/Sidebar';

import GlobalStyle from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Sidebar />
  </Fragment>
);

export default App;
