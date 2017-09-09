import { connect } from 'react-redux';

import Editor from './editor';

const mapDispatchToProps = dispatch => ({
  openAssignment() {
    dispatch({
      type: 'OPEN_ASSIGNMENT',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(Editor);
