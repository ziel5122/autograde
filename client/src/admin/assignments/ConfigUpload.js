import React from 'react';

const reader = new FileReader();

const handleInputChange = ({ target }) => {
  reader.readAsText(target.files[0]);
};

reader.onload = ({ target }) => {
  const configJson = JSON.parse(target.result);
  fetch('http://localhost:3000/assignments/set', {
    body: JSON.stringify({
      configJson: configJson,
      token: sessionStorage.getItem('jwt'),
    }),
    headers: { 'content-type': 'application/json' },
    method: 'post',
  })
    .then(response => console.log(response.status))
    .catch(err => console.log(err, err.stack));
};

const buttonStyle = {
  cursor: 'hand',
  cursor: 'pointer',
};

const inputStyle = {
  display: 'none',
};

const ConfigUpload = ({ button, type }) => (
  <div>
    <label htmlFor="configInput" style={buttonStyle}>
      {button}
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
