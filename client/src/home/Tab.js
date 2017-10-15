import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Tab extends PureComponent {
  constructor() {
    super();
    this.handleSetOpenTab = this.handleSetOpenTab.bind(this);
  }

  handleSetOpenTab() {
    const { assignmentId, partId } = this.props;
    this.props.setOpenTab(assignmentId, partId);
  }

  render() {
    const { name, style } = this.props;

    return (
      <div
        onClick={this.handleSetOpenTab}
        role="button"
        style={style}
        tabIndex={0}
      >
        {name}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setOpenTab(assignmentId, partId) {
    dispatch({
      assignmentId,
      partId,
      type: 'SET_OPEN_TAB',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(Tab);
