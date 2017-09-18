import ace from 'brace';
import React, { Component } from 'react';

import 'brace/mode/javascript';
import 'brace/theme/clouds';
import 'brace/theme/clouds_midnight';

class Editor extends Component {
  componentDidMount() {
    this.editor = ace.edit("editor");
    this.editor.setPrintMarginColumn(80);
    this.editor.setTheme(this.props.theme);
    this.editor.getSession().setMode('ace/mode/c_cpp');
  }

  componentWillReceiveProps(nextProps) {
    this.editor.setTheme(nextProps.theme);
  }

  render() {
    return (
        <div id="editor" style={{
            height: '100%',
            resize: 'horizontal',
            maxWidth: '665px',
            width: '665px',
          }}
        >{
`#include <stdio.h>

int main() {
  printf("hello world\\n");
}`
        }</div>
    );
  }
}

export default Editor;
