import React, { Component } from 'react';

class PlayPause extends Component {
  _pause() {
    this.props.onPause();
  }
  _play() {
    this.props.onPlay();
  }
  render() {
    let { isPlaying } = this.props;
    if (isPlaying) {
      return (
        <span className="ry-video-button icon-pause" onClick={this._pause.bind(this)}></span>
      )
    } else {
      return (
        <span className="ry-video-button icon-play-arrow" onClick={this._play.bind(this)}></span>
      )
    }
  }
}

export default PlayPause;
