import React from 'react';

const style = {
  fontSize: '24px',
  lineHeight: '24px',
  padding: '8px',
};

const Title = () => (
  <div className="title" style={style}>
    autograde
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
