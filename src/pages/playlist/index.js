import React from 'react';

import { Container, Header, SongLists } from './style';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://lastfm-img2.akamaized.net/i/u/770x0/25e5584abdb6f7e2c3b9301e676172ac.jpg"
        alt="playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button type="button">PLAY</button>
      </div>
    </Header>
    <SongLists cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={ClockIcon} alt="duração" />
          </th>
        </tr>
      </thead>
      <tbody>
        {[0, 1, 2, 3, 4, 5].map(item => (
          <tr key={item}>
            <td>
              <img src={PlusIcon} alt="adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
        ))}
      </tbody>
    </SongLists>
  </Container>
);

export default Playlist;
