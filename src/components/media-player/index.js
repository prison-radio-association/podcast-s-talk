import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import JPlayer, {
  initializeOptions, Gui, SeekBar, BufferBar,
  Audio, Mute, Play, PlayBar, VolumeBar, Duration,
  CurrentTime, BrowserUnsupported,
} from 'react-jplayer';
import PlayPause from './play-pause';

const defaultOptions = {
  id: 'AudioPlayer',
  keyEnabled: true,
  verticalVolume: false,
  media: {},
};

initializeOptions(defaultOptions);

const AudioPlayer = ({ src }) => (
  <div className={cx({
    'd-none': !src,
  }, 'mediabar fixed-bottom')}>
    <JPlayer id={defaultOptions.id} className="jp-sleek">
      <Audio />
      <Gui>
        <div className="jp-controls jp-icon-controls">
          <Play><PlayPause /></Play>
          <CurrentTime />
          <div className="jp-progress">
            <SeekBar>
              <BufferBar />
              <PlayBar />
            </SeekBar>
          </div>
          <Duration />
          <div className="jp-volume-container">
            <Mute>
              <i className="fa">{/* Icon set in css */}</i>
            </Mute>
            <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </JPlayer>
  </div>
);

export default connect(state => ({ src: state.jPlayers.AudioPlayer.src }))(AudioPlayer);
