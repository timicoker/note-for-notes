import React from 'react';

const InfoBar = ({ room }) => {
  return (
    <div className="infobar">
      <div className="left-inner-container">
        <img className="onlineIcon" src="" alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="right-inner-container">
        <a href="/">
          <img src="" alt="close image" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
