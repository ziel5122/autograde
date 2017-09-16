import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import AuthRoute from '../containers/AuthRoute';
import ClassHome from '../containers/ClassHome';
import dynamodb from '../../../server/src/aws/dynamo-db';
import jwt from 'jsonwebtoken';
import Login from '../containers/Login';

const bodyStyles = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'flex',
};

class Body extends Component {
  constructor() {
    super();

    this.state = {
      attempts: 0,
      feedback: '',
    };

    this.setAttempts = this.setAttempts.bind(this);
    this.setFeedback = this.setFeedback.bind(this);
  }

  componentWillMount() {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        const { username } = decoded;

        const params = {
          Key: {
            username,
          },
          TableName: 'users',
        };

        dynamodb.get(params, (err, data) => {
          this.setState({
            attempts: data.Item.attempts,
            feedback: '',
          });
        });
      });
    }
  }

  componentWillReceiveProps() {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        const { username } = decoded;

        const params = {
          Key: {
            username,
          },
          TableName: 'users',
        };

        dynamodb.get(params, (err, data) => {
          this.setState({
            attempts: data.Item.attempts,
            feedback: '',
          });
        });
      });
    }
  }

  setAttempts(attempts) {
    this.setState({ attempts });
  }

  setFeedback(feedback) {
    this.setState({ feedback });
  }

  render() {
    return (
      <div style={bodyStyles}>
        <AuthRoute
          Component={() => (
            <ClassHome
              attempts={this.state.attempts}
              feedback={this.state.feedback}
              setAttempts={this.setAttempts}
              setFeedback={this.setFeedback}
            />
          )}
          exact
          path="/"
        />
        <Route path="/login" component={Login} />
        <Route path="*" component={null} />
      </div>
    );
  }
}

export default withRouter(Body);
