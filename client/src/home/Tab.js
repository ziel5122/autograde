import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { setOpenTab } from '../redux/actions/assignments';

class Tab extends PureComponent {
  constructor() {
    super();
    this.handleSetOpenTab = this.handleSetOpenTab.bind(this);
  }

  handleSetOpenTab() {
    const { assignmentId, dispatch, partId } = this.props;
    dispatch(setOpenTab(assignmentId, partId));
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

export default connect()(Tab);
