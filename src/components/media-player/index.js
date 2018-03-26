import React from 'react';
import { Player, withMediaProps, controls } from 'react-media-player';
import { connect } from 'react-redux';
import PlayPause from './play-pause';
import MuteUnmute from './mute-unmute';
import { setMediaPlaying, setMediaPaused, setMediaLoading } from '../../actions';

const {
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  Volume,
  Fullscreen,
} = controls;

// const { keyboardControls } = utils;

const MediaPlayer = ({ src, setMediaPlaying, setMediaPaused, setMediaLoading }) => {
  if (!src) {
    return null;
  }

  return (
    <div className="mediabar text-white fixed-bottom d-flex align-items-center">
      <div className="container-fluid">
        <Player
          src={src}
          autoPlay
          className="media-player"
          onPlay={setMediaPlaying}
          onPause={setMediaPaused}
          onProgress={setMediaLoading}
        />
        <div className="media-player__controls d-flex align-items-center">
          <PlayPause className="mr-3" />
          <CurrentTime className="mr-3" />
          <SeekBar className="seekbar mr-3" />
          <Duration className="mr-3" />
          <MuteUnmute className="mr-3 d-none d-md-block" />
          <Volume className="volumebar d-none d-md-block" />
        </div>
      </div>
    </div>
  );
};

export default withMediaProps(connect(
  state => ({ src: state.media.src }),
  { setMediaPlaying, setMediaPaused, setMediaLoading },
)(MediaPlayer));
