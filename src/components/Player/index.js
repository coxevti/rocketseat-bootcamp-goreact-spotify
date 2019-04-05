import React from 'react';
import Slider from 'rc-slider';
import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShufflerIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://lastfm-img2.akamaized.net/i/u/770x0/25e5584abdb6f7e2c3b9301e676172ac.jpg"
        alt="cover"
      />
      <div>
        <span>Fuego</span>
        <small>Alok</small>
      </div>
    </Current>
    <Progress>
      <Controls>
        <button type="button">
          <img src={ShufflerIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="Play" />
        </button>
        <button type="button">
          <img src={ShufflerIcon} alt="Shuffler" />
        </button>
        <button type="button">
          <img src={PauseIcon} alt="Pause" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handledStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
