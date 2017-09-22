import React from 'react';

import github from '../images/mark-github.svg';

const anchorStyle = {
  alignItems: 'center',
  display: 'flex',
  height: '40px',
  justifyContent: 'center',
  textDecoration: 'none',
  width: '40px',
};

const Github = () => (
  <div>
    <a
      className="github"
      href="http://github.com/ziel5122/autograde"
      style={anchorStyle}
    >
      <img src={github} alt="github" />
    </a>
    <style jsx>{`
      .github {
        cursor: hand;
        cursor: pointer;
      }

      .github:hover {
        background: rgba(106, 90, 205, .25);
      }
    `}</style>
  </div>
);

export default Github;
