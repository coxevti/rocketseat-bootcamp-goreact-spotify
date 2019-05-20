import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
};

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  duration: null,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        status: Sound.status.PLAYING,
        list: action.payload.list,
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    case Types.NEXT: {
      const nextIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const next = state.list[nextIndex + 1];
      if (next) {
        return { ...state, currentSong: next };
      }
      return { ...state };
    }
    case Types.PREV: {
      const prevIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[prevIndex - 1];
      if (prev) {
        return { ...state, currentSong: prev };
      }
      return { ...state };
    }
    case Types.PLAYING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const Creators = {
  loadSong: (song, list) => ({
    type: Types.LOAD,
    payload: { song, list },
  }),
  play: () => ({
    type: Types.PLAY,
  }),
  pause: () => ({
    type: Types.PAUSE,
  }),
  next: () => ({
    type: Types.NEXT,
  }),
  prev: () => ({
    type: Types.PREV,
  }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration },
  }),
};
