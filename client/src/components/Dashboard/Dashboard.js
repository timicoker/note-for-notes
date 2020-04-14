import React, { Component } from 'react';
import Join from './Join';
import RoomList from './RoomList';

class Dash extends Component {
  render() {
    return (
      <div className="container">
        <div className="join-chat">
          <Join />
        </div>
        <div className="room-list">
          <RoomList />
        </div>
      </div>
    );
  }
}
export default Dash;
