import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { connect } from 'react-redux';

const EditorOptions = ({ darkTheme, fontSize, setFontSize, toggleDarkTheme }) => (
  <div>
    <table>
      <tr>
        <td>Dark Theme</td>
        <td>
          <Toggle onToggle={toggleDarkTheme} toggled={darkTheme} />
        </td>
      </tr>
      <tr>
        <td>Font Size</td>
        <td>
          <Slider
            defaultValue={fontSize}
            min={10}
            max={18}
            onChange={(event, newValue) => setFontSize(newValue)}
            step={2}
            style={{
              flex: 1,
              marginLeft: '16px',
              width: '56px',
            }}
            sliderStyle={{
              height: '16px',
              flex: 1,
              margin: 0,
            }}
          />
        </td>
      </tr>
    </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditorOptions);
