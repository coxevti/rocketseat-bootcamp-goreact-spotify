import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browser = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist href="">
        <img
          src="https://lastfm-img2.akamaized.net/i/u/770x0/25e5584abdb6f7e2c3b9301e676172ac.jpg"
          alt="playlist"
        />
        <strong>Rock</strong>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://lastfm-img2.akamaized.net/i/u/770x0/25e5584abdb6f7e2c3b9301e676172ac.jpg"
          alt="playlist"
        />
        <strong>Rock</strong>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://lastfm-img2.akamaized.net/i/u/770x0/25e5584abdb6f7e2c3b9301e676172ac.jpg"
          alt="playlist"
        />
        <strong>Rock</strong>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://lastfm-img2.akamaized.net/i/u/770x0/25e5584abdb6f7e2c3b9301e676172ac.jpg"
          alt="playlist"
        />
        <strong>Rock</strong>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browser;
