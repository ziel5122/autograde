import React from 'react';
import { connect } from 'react-redux';

const Editors = ({ editors, match: { params: { partId } }, parts }) => {
  const { editorIds } = parts[partId];

  return (
    <div>{
      editorIds.map((editorId) => {
        const { filename, title, type } = editors[editorId];

        return <div key={filename}>{`${filename} ${type} ${title}`}</div>
      })
    }</div>
  );
};

const mapStateToProps = ({ editors, parts }) => ({
  editors,
  parts,
});

export default connect(mapStateToProps)(Editors);
