import jwt from 'jsonwebtoken';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import AuthRoute from '../containers/AuthRoute';
import Assignment from '../assignment/Assignment';
import Assignments from '../admin/Assignments';
import Demo from '../demo/Demo';
import Home from '../class/Home';
import Login from '../containers/Login';

const bodyStyles = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '24px',
};

const style = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '24px',
};

const Body = () => (
  <div style={style}>
    <AuthRoute exact path="/" Component={Home} />
    <AuthRoute path="/admin" Component={Assignments} />
    <Route path="/demo" component={Demo} />
    <Route path="/login" component={Login} />
    <Route path="*" component={null} />
  </div>
);
/*
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
    console.log('mount');
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

        dynamodb.get(params, (error, data) => {
          this.setState({
            attempts: data.Item.attempts,
            feedback: '',
          });
        });
      });
    }
  }

  componentWillReceiveProps() {
    console.log('props');
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

        dynamodb.get(params, (error, data) => {
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
      </div>
    );
  }
}
*/
export default withRouter(Body);
