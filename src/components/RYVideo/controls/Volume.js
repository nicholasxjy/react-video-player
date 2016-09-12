import React, { Component } from 'react';

class Volume extends Component {
  _mute() {
    this.props.onMute();
  }
  _unmute() {
    this.props.onUnmute();
  }
  render() {
    let { isMuted } = this.props;
    if (isMuted) {
      return (
        <span className="ry-video-button icon-volume-off" onClick={this._unmute.bind(this)}></span>
      )
    } else {
      return (
        <span className="ry-video-button icon-volume-up" onClick={this._mute.bind(this)}></span>
      )
    }
  }
}

export default Volume;
