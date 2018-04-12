import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-jplayer';

const PlayPause = ({ src, className = 'btn-outline-primary', currentSrc, paused, play, pause, resume }) => {
  if (currentSrc === src) {
    return (
      <button className={`btn ${className}`} onClick={paused ? resume : pause}>
        {paused ? 'Play' : 'Pause'}
      </button>
    );
  }

  return <button className={`btn ${className}`} onClick={play}>Play</button>;
};

export default connect(
  state => ({
    currentSrc: state.jPlayers.AudioPlayer.src,
    paused: state.jPlayers.AudioPlayer.paused,
  }),
  (dispatch, ownProps) => ({
    play: () => {
      dispatch(actions.setMedia('AudioPlayer', {
        sources: { mp3: ownProps.src },
      }));
      dispatch(actions.play('AudioPlayer'));
    },
    resume: () => dispatch(actions.play('AudioPlayer')),
    pause: () => dispatch(actions.pause('AudioPlayer')),
  }),
)(PlayPause);
