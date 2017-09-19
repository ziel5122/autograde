import ace from 'brace';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import 'brace/mode/c_cpp';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';

const getAceTheme = darkTheme => (
  darkTheme ? 'ace/theme/clouds_midnight' : 'ace/theme/clouds'
);

class Editor extends PureComponent {
  componentDidMount() {
    this.editor = ace.edit('editor');
    this.editor.on('change', () => {
      this.props.handleEditor(this.editor.getValue());
    });
    this.editor.setFontSize(this.props.fontSize);
    this.editor.setPrintMarginColumn(80);
    this.editor.setTheme(getAceTheme(this.props.darkTheme));
    this.editor.getSession().setMode(this.props.mode);
    this.editor.setValue(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.editor.setFontSize(nextProps.fontSize);
    this.editor.setTheme(getAceTheme(nextProps.darkTheme));
  }

  render() {
    return <div id="editor" style={{ flex: 1, height: '100%' }} />;
  }
}

const mapStateToProps = ({ editor: { darkTheme, fontSize } }) => ({
  darkTheme,
  fontSize,
});

export default connect(mapStateToProps)(Editor);
