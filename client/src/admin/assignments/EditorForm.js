import Done from 'material-ui/svg-icons/action/done';
import React from 'react';

const EditorForm = ({ editor: { filename, title, type }, key }) => (
  <tr>
    <td>
      <input defaultValue={filename} id={`${key}filename`} />
    </td>
    <td>
      <select defaultValue={type} id={`${key}select`}>
        <option value="C">C</option>
        <option value="bash">bash</option>
      </select>
    </td>
    <td>
      <Done />
    </td>
  </tr>
);

export default EditorForm;
