import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
  HANDLE_POSITION: 'player/HANDLE_POSITION',
  SET_POSITION: 'player/SET_POSITION',
  SET_VOLUME: 'player/SET_VOLUME',
};

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  positionShown: null,
  duration: null,
  volume: 100,
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
        return { ...state, currentSong: next, position: 0 };
      }
      return { ...state };
    }
    case Types.PREV: {
      const prevIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[prevIndex - 1];
      if (prev) {
        return { ...state, currentSong: prev, position: 0 };
      }
      return { ...state };
    }
    case Types.PLAYING:
      return { ...state, ...action.payload };
    case Types.HANDLE_POSITION:
      return { ...state, positionShown: state.duration * action.payload.percentage };
    case Types.SET_POSITION:
      return { ...state, position: state.duration * action.payload.percentage, positionShown: 0 };
    case Types.SET_VOLUME:
      return { ...state, volume: action.payload.volume };
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
  handlePosition: percentage => ({
    type: Types.HANDLE_POSITION,
    payload: { percentage },
  }),
  setPosition: percentage => ({
    type: Types.SET_POSITION,
    payload: { percentage },
  }),
  setVolume: volume => ({
    type: Types.SET_VOLUME,
    payload: { volume },
  }),
};
