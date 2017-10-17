import ContentAdd from 'material-ui/svg-icons/content/add';
import React from 'react';

const reader = new FileReader();

const handleInputChange = ({ target }) => {
  reader.readAsText(target.files[0]);
};

reader.onload = ({ target }) => {
  const configJson = JSON.parse(target.result);
  fetch('http://localhost:3000/assignments/set', {
    body: JSON.stringify({
      configJson,
      token: sessionStorage.getItem('jwt'),
    }),
    headers: { 'content-type': 'application/json' },
    method: 'post',
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err, err.stack));
};

const buttonStyle = {
/* eslint-disable no-dupe-keys */
  cursor: 'hand',
  cursor: 'pointer',
/* eslint-enable no-dupe-keys */
};

const inputStyle = {
  display: 'none',
};

const ConfigUpload = () => (
  <div>
    <label htmlFor="configInput" style={buttonStyle}>
      <ContentAdd />
      <input
        id="configInput"
        onChange={handleInputChange}
        style={inputStyle}
        type="file"
      />
    </label>
  </div>
);

export default ConfigUpload;
