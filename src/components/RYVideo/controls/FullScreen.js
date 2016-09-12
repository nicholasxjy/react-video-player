import React, { Component } from 'react';

export default class FullScreen extends Component {
  _setFullScreen() {
    this.props.onFullScreen();
  }
  render() {
    return (
      <span className="ry-video-button icon-fullscreen" onClick={this._setFullScreen.bind(this)}></span>
    )
  }
}
