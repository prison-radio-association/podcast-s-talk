import React, { Component } from 'react';
import { withMediaProps } from 'react-media-player';
import VolumeOff from 'open-iconic/svg/volume-off.svg';
import VolumeLow from 'open-iconic/svg/volume-low.svg';
import VolumeHigh from 'open-iconic/svg/volume-high.svg';
import cx from 'classnames';

class MuteUnmute extends Component {
  shouldComponentUpdate({ media }) {
    return (this.props.media.isMuted !== media.isMuted) || (this.props.media.volume !== media.volume);
  }

  _handleMuteUnmute = () => {
    this.props.media.muteUnmute();
  }

  render() {
    const { media, className } = this.props;
    let Icon = media.volume >= .5 ? VolumeHigh : VolumeLow;
    
    if (media.isMuted) {
      Icon = VolumeOff;
    }

    return (
      <button
        type="button"
        className={cx('mute-unmute', className, {
          'mute-unmute--muted': media.isMuted,
        })}
        onClick={this._handleMuteUnmute}
      >
        <Icon />
      </button>
    )
  }
}

export default withMediaProps(MuteUnmute)