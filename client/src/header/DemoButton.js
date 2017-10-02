import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
};

const style = {
  color: 'whitesmoke',
  fontSize: '16px',
  lineHeight: '16px',
  padding: '12px',
};

const DemoButton = ({ loggedIn }) => (
  loggedIn ? null : (
    <div>
      <Link to="/demo" style={linkStyle}>
        <div className="demoButton" style={style}>
          demo
        </div>
      </Link>
      <style jsx>{`
        .demoButton {
          cursor: hand;
          cursor: pointer;
        }

        .demoButton:hover {
          background: rgba(106, 90, 205, .25);
        }
      `}</style>
    </div>
  )
);

DemoButton.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login: { loggedIn } }) => ({
  loggedIn,
});

export default connect(mapStateToProps)(DemoButton);
