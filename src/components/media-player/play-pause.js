import React, { Component } from 'react';
import { withMediaProps } from 'react-media-player';
import PlayIcon from 'open-iconic/svg/media-play.svg';
import PauseIcon from 'open-iconic/svg/media-pause.svg';
import LoadingIcon from 'open-iconic/svg/reload.svg';
import cx from 'classnames';

class PlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return (this.props.media.isPlaying !== media.isPlaying) || (this.props.media.isLoading !== media.isLoading);
  }

  _handlePlayPause = () => {
    if (!this.props.media.isLoading) {
      this.props.media.playPause()
    }
  }

  render() {
    const { media, className, children } = this.props;
    let Icon = PlayIcon;
    
    if (media.isLoading) {
      Icon = LoadingIcon;
    } else if (media.isPlaying) {
      Icon = PauseIcon;
    }

    return (
      <button
        type="button"
        className={cx('play-pause', className, {
          'play-pause--paused': !media.isPlaying,
          'play-pause--playing': media.isPlaying,
          'play-pause--loading': media.isLoading,
        })}
        onClick={this._handlePlayPause}
      >
        <Icon />{children}
      </button>
    );
  }
}

export default withMediaProps(PlayPause);