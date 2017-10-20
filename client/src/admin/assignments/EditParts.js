import Subheader from 'material-ui/Subheader';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const style = {
  background: 'white',
  flex: '.333',
  marginLeft: '12px',
  marginRight: '12px',
  paddingLeft: '12px',
  paddingRight: '12px',
  width: '100%',
};

const EditParts = ({ partIds, parts, match: { url } }) => (
  <div style={style}>
    <Subheader>Parts</Subheader>
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <td><b>Name</b></td>
          <td style={{ textAlign: 'center' }}><b>Attempts</b></td>
          <td></td>
        </tr>
      </thead>
      <tbody>{
        partIds.map((partId) => {
          const { attempts, name } = parts[partId];

          return (
            <tr>
              <td>{name}</td>
              <td style={{ textAlign: 'center' }}>{attempts}</td>
              <td style={{ textAlign: 'center' }}>
                <Link to={`${url}/${partId}`}>
                  <KeyboardArrowRight />
                </Link>
              </td>
            </tr>
          );
        })
      }</tbody>
    </table>
  </div>
);

const mapStateToProps = ({ admin: { partIds, parts } }) => {
  console.log(partIds);
  console.log(parts);

  return {
    partIds,
    parts,
  };
};

export default withRouter(connect(mapStateToProps)(EditParts));
