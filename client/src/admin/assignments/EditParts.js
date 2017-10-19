import React from 'react';

const EditParts = ({ partIds, parts }) => (
  <div style={partsStyle}>
    Parts
    {
      partIds.map((partId) => {
        const { attempts, name } = parts[partId];

        return (
          <Link
            key={partId}
            style={{ display: 'block' }}
            to={`${url}/${partId}`}
          >
            {`${name} ${attempts}`}
          </Link>
        );
      })
    }
  </div>
);

const mapStateToProps = ({ admin: { partIds, parts } }) => ({
  partIds,
  parts,
});

export default EditParts;
