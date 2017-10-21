import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const PartDetails = ({ match: { url }, partIds, parts }) => (
  <tbody>{
    partIds.map((partId, index) => {
      const { attempts, name } = parts[partId];

      return (
        <tr key={index}>
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
);

const mapStateToProps = ({ edit: { assignment: { partIds }, parts } }) => ({
  partIds,
  parts,
});

export default withRouter(connect(mapStateToProps)(PartDetails));
