import React, { Component } from 'react';
import RYSlider from './RYSlider';
import PlayPause from './controls/PlayPause';
import CurrentTime from './controls/CurrentTime';
import Duration from './controls/Duration';
import Volume from './controls/Volume';
import FullScreen from './controls/FullScreen';


class RYControls extends Component {
  _playVideo() {
    this.props.onPlay();
  }
  _pauseVideo() {
    this.props.onPause()
  }
  _muteVideo() {
    this.props.onMute()
  }
  _unMuteVideo() {
    this.props.onUnmute()
  }
  _setFullScreen() {
    this.props.onFullScreen()
  }
  _progressChange(value) {
    this.props.onProgressChangeHandler(value);
  }
  _volumeChange(value) {
    this.props.onVolumeChangeHandler(value);
  }
  render() {
    let { currentTime, duration, volume } = this.props;
    return (
      <div className="ry-video-controls">
        <div className="control-left">
          <PlayPause onPlay={this._playVideo.bind(this)} onPause={this._pauseVideo.bind(this)} isPlaying={this.props.isPlaying}/>
          <span className="control-time">
            <CurrentTime currentTime={currentTime}/>
            <span> / </span>
            <Duration duration={duration}/>
          </span>
        </div>
        <div className="control-progress">
          <RYSlider value={currentTime} progress={currentTime} min={0} max={duration} onValueChange={(value) => this._progressChange(value)}/>
        </div>
        <div className="control-right">
          <Volume onMute={this._muteVideo.bind(this)} onUnmute={this._unMuteVideo.bind(this)} isMuted={this.props.isMuted}/>
          <div className="control-volume">
            <RYSlider value={volume*10} progress={volume*10} min={0} max={10} onValueChange={(value) => this._volumeChange(value)}/>
          </div>
         <FullScreen onFullScreen={this._setFullScreen.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default RYControls;
