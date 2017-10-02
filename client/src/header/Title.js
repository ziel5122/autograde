import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
};

const style = {
  color: 'whitesmoke',
  fontSize: '24px',
  lineHeight: '24px',
  padding: '8px',
};

const Title = () => (
  <div>
    <Link to="/home" style={linkStyle}>
      <div className="title" style={style}>
        autograde
      </div>
    </Link>
    <style jsx>{`
      .title {
        cursor: hand;
        cursor: pointer;
      }

      .title:hover {
        background: rgba(106, 90, 205, .25);
      }
    `}</style>
  </div>
);

export default Title;
