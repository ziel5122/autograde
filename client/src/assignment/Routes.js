import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Editor from './Editor';

const Routes = ({ match: { url }, parts }) => (
  <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>{
    parts.map(({ name, editors }, partsIndex) => (
      <Route
        key={partsIndex}
        path={`${url}/${partsIndex}`}
        component={() => (
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', overflow: 'scroll' }}>{
            editors.map(({ name }, editorIndex) => (
              <div style={{ flex: 1 }} key={`${partsIndex}${editorIndex}`}>
                <div>{name}</div>
                <Editor id={`${partsIndex}${editorIndex}`} />
              </div>
            ))
          }</div>
        )}
      />
    ))
  }</div>
);

export default withRouter(Routes);
