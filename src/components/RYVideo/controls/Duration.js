import React, { Component } from 'react';
import {formatTime} from '../utils';

export default class Duration extends Component {
  render() {
    return (
      <span className="ry-video-duration">{formatTime(this.props.duration) || '00:00'}</span>
    )
  }
}
