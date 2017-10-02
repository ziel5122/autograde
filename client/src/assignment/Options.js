import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { connect } from 'react-redux';

const sliderStyles = {
  margin: 0,
};

const sliderSliderStyles = {
  margin: 0,
};

const Options = ({
  darkTheme,
  fontSize,
  setFontSize,
  toggleDarkTheme,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '8px', paddingRight: '8px', marginBottom: '8px' }}>
    <Subheader>Options</Subheader>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, fontSize: '16px', lineHeight: '16px', marginBottom: '8px', marginTop: '8px' }}>
        Dark Theme
      </div>
      <div style={{ paddingTop: '4px', width: '69px' }}>
        <Toggle onToggle={toggleDarkTheme} toggled={darkTheme} />
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, fontSize: '16px', lineHeight: '16px', marginBottom: '8px', marginTop: '8px' }}>
        Font Size
      </div>
      <div style={{ paddingTop: '4px', width: '69px' }}>
        <Slider
          defaultValue={fontSize}
          min={10}
          max={18}
          onChange={(event, newValue) => setFontSize(newValue)}
          sliderStyle={sliderSliderStyles}
          step={2}
          style={sliderStyles}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ editor: { darkTheme, fontSize } }) => ({
  darkTheme,
  fontSize,
});

const mapDispatchToProps = dispatch => ({
  setFontSize(fontSize) {
    dispatch({
      fontSize,
      type: 'SET_FONT_SIZE',
    });
  },

  toggleDarkTheme() {
    dispatch({
      type: 'TOGGLE_DARK_THEME',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
