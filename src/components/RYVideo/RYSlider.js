import React, { Component } from 'react';
import './slider.css';

class RYSlider extends Component {
  sliderValueChange(e) {
    this.props.onValueChange(e.target.value);
  }
  render() {
    let { value, min, max, progress } = this.props;
    return (
      <div className="ry-slider">
        <input type="range" value={value} min={min} max={max} onChange={this.sliderValueChange.bind(this)}/>
        <div className="ry-slider-progress" style={{width: (progress/max)*100+'%'}}></div>
      </div>
    )
  }
}
export default RYSlider;
