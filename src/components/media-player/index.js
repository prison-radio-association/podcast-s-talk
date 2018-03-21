import React from 'react';
import { Media, Player, controls } from 'react-media-player';

const {
  PlayPause,
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  MuteUnmute,
  Volume,
  Fullscreen,
} = controls;

// const { keyboardControls } = utils;

const MediaPlayer = ({ src }) => (
  <Media>
    <div className="media">
      <Player
        src={src}
        className="media-player"
      />
      <div className="media-controls">
        <PlayPause />
        <CurrentTime />
        <Progress />
        <SeekBar />
        <Duration />
        <MuteUnmute />
        <Volume />
        <Fullscreen />
      </div>
    </div>
  </Media>
);

export default MediaPlayer;
