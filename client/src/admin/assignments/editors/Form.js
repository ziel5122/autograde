import Done from 'material-ui/svg-icons/action/done';
import React from 'react';

const EditorForm = ({ addEditor, editor: { filename, title, type }, id }) => (
  <tr>
    <td>
      <input defaultValue={filename} id={`${id}filename`} />
    </td>
    <td>
      <select defaultValue={type} id={`${id}select`}>
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
