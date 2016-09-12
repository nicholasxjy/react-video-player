import React, { Component } from 'react';
import RYControls from './RYControls';
import './video.css';

class RYPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      isMuted: false,
      volume: 0.5
    };
  }
  calculateDimension(original, real) {
    let ratio = real.width/original.width;
    let height = original.height * ratio;
    return {width: real.width, height: height};
  }
  setVideoDimension(dimension) {
    this.videoElem.width = dimension.width;
    this.videoElem.height = dimension.height;
  }
  componentDidMount() {
    var self = this;
    let realDimension = {
      width: this.videoElem.offsetWidth,
      height: this.videoElem.offsetHeight
    };

    let { autoplay, loop } = this.props.video;
    if (autoplay) {
      this.videoElem.setAttribute('autoplay', 'true');
      this.setState({
        isPlaying: true
      });
      this.videoElem.play();
    }
    if (loop) {
      this.videoElem.setAttribute('loop', 'true');
    }

    this.videoElem.addEventListener('loadedmetadata', function(e) {
      self.setState({
        duration: this.duration
      });
      let originalDimension = {
        width: this.videoWidth,
        height: this.videoHeight
      };
      let dimension = self.calculateDimension(originalDimension, realDimension);
      self.setVideoDimension(dimension);
      self.videoElem.volume = self.state.volume;
    }, false);


    this.videoElem.addEventListener('timeupdate', function(e) {
      self.setState({
        currentTime: self.videoElem.currentTime
      });
    });

  }

  playVideo() {
    this.setState({
      isPlaying: true
    });
    this.videoElem.play();
  }

  pauseVideo() {
    this.setState({
      isPlaying: false
    });
    this.videoElem.pause();
  }

  muteVideo() {
    this.setState({
      isMuted: true
    });
    this.videoElem.muted = true;
  }

  unmuteVideo() {
    this.setState({
      isMuted: false
    });
    this.videoElem.muted = false;
  }

  fullScreen() {
    if (!this.videoElem.fullscreenElement && !this.videoElem.mozFullScreenElement && !this.videoElem.webkitFullscreenElement && !this.videoElem.msFullscreenElement ) {
      let requestFullScreen = this.videoElem.requestFullscreen || this.videoElem.msRequestFullscreen || this.videoElem.mozRequestFullScreen || this.videoElem.webkitRequestFullscreen;
      requestFullScreen.call(this.videoElem);
    }
  }
  handleProgressChange(value) {
    this.setState({
      currentTime: value
    });
    this.videoElem.currentTime = value;
  }

  handleVolumeChange(value) {
    this.setState({
      volume: value/10
    });
    this.videoElem.volume = value/10;
  }

  render() {
    let { video } = this.props;
    return (
      <div className="ry-player">
        <video src={video.source} poster={video.poster} ref={(video) => this.videoElem = video}></video>
        <RYControls onPlay={this.playVideo.bind(this)} onPause={this.pauseVideo.bind(this)} onMute={this.muteVideo.bind(this)}  onUnmute={this.unmuteVideo.bind(this)} onFullScreen={this.fullScreen.bind(this)} onProgressChangeHandler={(value) => this.handleProgressChange(value)} onVolumeChangeHandler={(value) => this.handleVolumeChange(value)} currentTime={this.state.currentTime} duration={this.state.duration} isPlaying={this.state.isPlaying} isMuted={this.state.isMuted} volume={this.state.volume} />
      </div>
    )
  }
}

export default RYPlayer;
