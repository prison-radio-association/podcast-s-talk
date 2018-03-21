import React from 'react';
import { Media, Player, controls } from 'react-media-player';
import PlayPause from './play-pause';
import MuteUnmute from './mute-unmute';

const {
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  Volume,
  Fullscreen,
} = controls;

// const { keyboardControls } = utils;

const MediaPlayer = ({ src }) => (
  <Media>
    <div className="mediabar text-white fixed-bottom py-1">
      <div className="container-fluid">
        <Player
          src="http://traffic.libsyn.com/sextalk/Sex_Talk_Podcast_Promo.mp3"
          className="media-player"
        />
        <div className="media-player__controls d-flex align-items-center">
          <PlayPause className="mr-3" />
          <CurrentTime className="mr-3" />
          <SeekBar className="seekbar mr-3" />
          <Duration className="mr-3" />
          <MuteUnmute className="mr-3 d-none d-md-block" />
          <Volume className="d-none d-md-block" />
        </div>
      </div>
    </div>
  </Media>
);

export default MediaPlayer;
