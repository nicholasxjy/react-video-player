import React, { Component } from 'react';
import {formatTime} from '../utils';

export default class CurrentTime extends Component {
  render() {
    return (
      <span className="ry-video-currenttime">{formatTime(this.props.currentTime) || '00:00'}</span>
    )
  }
}
