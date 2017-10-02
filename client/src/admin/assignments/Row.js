import React, { PureComponent } from 'react';

const editStyle = {
  textAlign: 'center',
};

const Row = ({
  assignment: {
    attempts,
    dueDate,
    id,
    name,
    visible,
  },
  edit,
}) => (
  <tr>
    <td onClick={edit} style={editStyle}>&#9998;</td>
    <td>{id}</td>
    <td>{name}</td>
    <td>{dueDate}</td>
    <td style={{ textAlign: 'center' }}>{attempts}</td>
    <td style={{ textAlign: 'center' }}>&#10004;</td>
  </tr>
);

export default Row;
