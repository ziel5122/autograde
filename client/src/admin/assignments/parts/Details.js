import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import PartForm from './Form';

const PartDetails = ({ url , partIds, parts }) => (
  <tbody>{
    partIds.map((partId, index) => {
      const { attempts, name } = parts[partId];

      return (
        <PartForm
          attempts={attempts}
          key={partId}
          name={name}
          partId={partId}
        />
      );
    })
  }</tbody>
);

export default withRouter(PartDetails);
