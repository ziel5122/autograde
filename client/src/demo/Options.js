import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import React from 'react';

const optionsStyle = {
  alignItems: 'center',
  display: 'flex',
  width: '100%',
};

const sliderStyle = {
  height: '24px',
  margin: 0,
  marginLeft: '12px',
  width: '48px',
};

const sliderSliderStyle = {
  margin: 0,
};

const style = {
  flex: 1,
};

const toggleStyle = {
  width: '46px',
};

const Options = () => (
  <div style={style}>
    <Subheader>Options</Subheader>
    <div style={optionsStyle}>
      <div>Dark Theme</div>
      <Toggle style={toggleStyle} />
      <div>Font Size</div>
      <Slider
        max={18}
        min={10}
        sliderStyle={sliderSliderStyle}
        step={2}
        style={sliderStyle}
      />
    </div>
  </div>
);

export default Options;
