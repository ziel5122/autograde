import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

let configJson;
let gradingZip;
const reader = new FileReader();
const zipReader = new FileReader();

const style = {
  margin: '24px',
};

reader.onload = ({ target }) => {
  configJson = JSON.parse(target.result);
};

zipReader.onload = ({ target }) => gradingZip = target.result;

const handleConfigFile = ({ target }) => {
  const configFile = target.files[0];
  reader.readAsText(configFile);
};

const handleGradingZip = ({ target }) => {
  const zipFile = target.files[0];
  zipReader.readAsText(zipFile);
};

class New extends PureComponent {
  constructor() {
    super();
    this.state = {
      errorText: '',
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount() {
    this.store = this.context.store;
  }

  handleUpload() {
    if (configJson && gradingZip) {
      const { assignments: { assignments } } = this.store.getState();
      if (assignments.find(({ name }) => name === configJson.name)) {
        this.setState({ errorText: 'assignment name already exists' });
      } else {
        fetch('http://localhost:3000/assignments/new', {
          body: JSON.stringify({
            configJson,
            gradingZip,
          }),
          headers: { 'content-type': 'application/json' },
          method: 'post',
        })
          .then(response => console.log(response.status))
          .catch(err => console.log(err, err.stack));
      }
    }
  };

  render() {
    return (
      <div style={style}>
        <table>
          <tbody>
            <tr>
              <td>Config File (JSON)</td>
              <td>
                <input
                  id="configFile"
                  onChange={handleConfigFile}
                  type="file"
                />
              </td>
            </tr>
            <tr>
              <td>Grading Zip (.zip)</td>
              <td>
                <input
                  id="gradingZip"
                  onChange={handleGradingZip}
                  type="file"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  onClick={this.handleUpload}
                  type="button"
                >
                  upload
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

New.contextTypes = {
  store: PropTypes.object,
};

export default New;
