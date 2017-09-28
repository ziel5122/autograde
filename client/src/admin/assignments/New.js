import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

let configJson;
let gradingZip;
let reader = new FileReader();

const style = {
  margin: '24px',
};

reader.onload = ({ target }) => {
  configJson = JSON.parse(target.result);
};

const handleConfigFile = ({ target }) => {
  const configFile = target.files[0];
  reader.readAsText(configFile);
};

const handleGradingZip = ({ target }) => {
  gradingZip = target.files[0];
};

const handleUpload = (store) => {
  if (configJson && gradingZip) {
    const { assignments: { assignments } } = store.getState();
    console.log(store.getState());

    fetch('http://localhost:3000/assignments/new', {

    })
  }
};

const New = (props, { store }) => (
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
          <td>Grading Zip (.zip [not .tar.gz])</td>
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
              onClick={() => handleUpload(store)}
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

New.contextTypes = {
  store: PropTypes.object,
};

export default New;
