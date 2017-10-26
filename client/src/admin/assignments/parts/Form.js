import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const nameStyle = {
  width: '108px',
};

const numberStyle = {
  width: '36px',
};

class Form extends PureComponent {
  constructor() {
    super();
    this.onPartNameChange = this.onPartNameChange.bind(this);
    this.onPartAttemptsChange = this.onPartAttemptsChange.bind(this);
  }

  onPartAttemptsChange({ target: { value } }) {
    const { partId, setPartAttempts } = this.props;
    setPartAttempts(partId, value);
  }

  onPartNameChange({ target: { value } }) {
    const { partId, setPartName } = this.props;
    setPartName(partId, value);
  }

  render() {
    const { attempts, match: { url }, name, partId } = this.props;

    return (
      <tr>
        <td>
          <input
            defaultValue={name}
            onChange={this.onPartNameChange}
            style={nameStyle}
          />
        </td>
        <td style={{ textAlign: 'center' }}>
          <input
            defaultValue={attempts}
            onChange={this.onPartAttemptsChange}
            style={numberStyle}
            type="number"
          />
        </td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${url}/${partId}`}>
            <KeyboardArrowRight />
          </Link>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPartAttempts(partId, attempts) {
    dispatch({
      attempts,
      partId,
      type: 'SET_EDIT_PART_ATTEMPTS',
    });
  },

  setPartName(partId, name) {
    dispatch({
      name,
      partId,
      type: 'SET_EDIT_PART_NAME'
    });
  },
});

export default withRouter(connect(undefined, mapDispatchToProps)(Form));
