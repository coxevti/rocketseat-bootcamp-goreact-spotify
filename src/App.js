import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
