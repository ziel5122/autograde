import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Editor from './Editor';

const Routes = ({ match: { url }, parts }) => (
  <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>{
    parts.map(({ name, editors }) => (
      <Route
        key={name}
        path={`${url}/${name}`}
        component={() => (
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', overflow: 'scroll' }}>{
            editors.map((name) => (
              <div style={{ flex: 1 }} key={name}>
                <div>{name}</div>
                <Editor id={name} />
              </div>
            ))
          }</div>
        )}
      />
    ))
  }</div>
);

export default withRouter(Routes);
