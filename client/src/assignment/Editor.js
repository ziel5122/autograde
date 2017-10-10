import ace from 'brace';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import 'brace/mode/c_cpp';
import 'brace/mode/sh';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';

const editorStyles = {
  flex: 1,
};

const getAceTheme = darkTheme => (
  darkTheme ? 'ace/theme/clouds_midnight' : 'ace/theme/clouds'
);

class Editor extends PureComponent {
  componentDidMount() {
    this.editor = ace.edit(this.props.id);
    this.editor.on('change', () => this.props.setCode(this.props.id, this.editor.getValue()));
    this.editor.setFontSize(this.props.fontSize);
    this.editor.setPrintMarginColumn(80);
    this.editor.setTheme(getAceTheme(this.props.darkTheme));
    this.editor.getSession().setMode(this.props.mode);
    this.editor.setValue(this.props.code);
  }

  componentWillReceiveProps(nextProps) {
    this.editor.setFontSize(nextProps.fontSize);
    this.editor.setTheme(getAceTheme(nextProps.darkTheme));
  }

  componentWillUnmount() {
    this.editor.destroy();
  }

  render() {
    return <div id={this.props.id} style={editorStyles} />;
  }
}

const mapStateToProps = () => ({
  darkTheme: false,
  fontSize: 14,
});

const mapDispatchToProps = dispatch => ({
  setCode(editorId, code) {
    dispatch({
      code,
      id: editorId,
      type: 'SET_CODE',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
