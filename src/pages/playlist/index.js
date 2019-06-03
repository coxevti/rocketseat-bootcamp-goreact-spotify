/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';
import {
  Container, Header, SongLists, SongItem,
} from './style';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
          }),
        ),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number,
    }),
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadingPlaylistDetails();
  }

  componentDidUpdate(prevProp) {
    const {
      match: { params },
    } = this.props;
    if (prevProp.match.params.id !== params.id) {
      this.loadingPlaylistDetails();
    }
  }

  loadingPlaylistDetails() {
    const { getPlaylistDetailsRequest } = this.props;
    const {
      match: { params },
    } = this.props;
    getPlaylistDetailsRequest(params.id);
  }

  renderDetails = () => {
    const {
      playlistDetails: { data: playlist },
      loadSong,
      currentSong,
    } = this.props;
    const { selectedSong } = this.state;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}
            {!playlist.songs || playlist.songs.length > 0 ? (
              <button type="button" onClick={() => loadSong(playlist.songs[0], playlist.songs)}>
                PLAY
              </button>
            ) : null}
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
            {!playlist.songs || playlist.songs.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center' }}>
                  Nenhuma música cadastradas.
                </td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => loadSong(song, playlist.songs)}
                  selected={selectedSong === song.id}
                  playing={currentSong && currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongLists>
      </Container>
    );
  };

  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? (
      <Container cmloading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...PlaylistDetailsActions,
    ...PlayerActions,
  },
  dispatch,
);

Playlist.defaultProps = {
  currentSong: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
