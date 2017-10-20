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

const AdminButton = ({ admin }) => (
  admin ? (
    <div>
      <Link to="/admin" style={linkStyle}>
        <div className="demoButton" style={style}>
          admin
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
  ) : null
);

const mapStateToProps = ({ auth: { admin } }) => ({
  admin,
});

export default connect(mapStateToProps)(AdminButton);
