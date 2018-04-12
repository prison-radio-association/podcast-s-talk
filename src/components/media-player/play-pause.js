import React from 'react';
import { connect } from 'react-redux';
import PlayIcon from 'open-iconic/svg/media-play.svg';
import PauseIcon from 'open-iconic/svg/media-pause.svg';

const PlayPause = ({ paused }) => (paused ? <PlayIcon /> : <PauseIcon />);

export default connect(state => ({ paused: state.jPlayers.AudioPlayer.paused }))(PlayPause);
