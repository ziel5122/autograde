import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import github from '../images/mark-github.svg';

const demoButtonStyle = {
  color: 'white',
  display: 'inline-block',
  fontSize: '16px',
  lineHeight: '16px',
  padding: '12px',
};

const githubStyle = {
  display: 'inline-block',
  height: '24px',
  margin: 0,
  padding: '8px',
  verticalAlign: 'bottom',
};

const linkStyle = {
  margin: 0,
  textDecoration: 'none',
};

const subheaderStyle = {
  maxWidth: '1000px',
};

const Subheader = ({ loggedIn, style }) => (
  <div style={style}>
    <Link to="/demo" style={linkStyle}>
      <div className="demoButton" style={demoButtonStyle}>
        demo
      </div>
    </Link>
    <a className="githubLink" href="http://github.com/ziel5122/autograde" style={githubStyle}>
      <img src={github} alt="github" style={{ margin: 0 }}/>
    </a>
    <style jsx>{`
      .demoButton:hover {
        background: rgba(106, 90, 205, .25);
      }

      .githubLink:hover {
        background: rgba(106, 90, 205, .25);
      }
    `}</style>
  </div>
);

Subheader.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Subheader;
