import ace from 'brace';
import React, { Component } from 'react';

import 'brace/mode/c_cpp';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';

const getAceTheme = (darkTheme) => (
  darkTheme ? 'ace/theme/clouds_midnight' : 'ace/theme/clouds'
);

const maxWidthByFontSize = (fontSize) => {
  switch (fontSize) {
    case 18:
      return '810px';
    case 16:
      return '730px';
    case 14:
      return '645px';
    case 12:
      return '565px';
    case 10:
    default:
      return '480px';
  }
}

class Editor extends Component {
  componentDidMount() {
    this.editor = ace.edit("editor");
    this.editor.on('change', () => {
      this.props.handleEditor(this.editor.getValue())
    });
    this.editor.setFontSize(this.props.fontSize);
    this.editor.setPrintMarginColumn(80);
    this.editor.setTheme(getAceTheme(this.props.darkTheme));
    this.editor.getSession().setMode(this.props.mode);
    this.editor.setValue(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.editor.setFontSize(nextProps.fontSize);
    this.editor.setTheme(getAceTheme(nextProps.theme));
  }

  render() {
    return (
        <div id="editor" style={{
            height: '100%',
            resize: 'horizontal',
            maxWidth: maxWidthByFontSize(this.props.fontSize),
            width: maxWidthByFontSize(this.props.fontSize),
          }}
        ></div>
    );
  }
}

export default Editor;
