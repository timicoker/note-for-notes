import React from 'react';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <p className="sent-text">{trimmedName}</p>
      <div className="message-box">
        <p className="message-text">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box">
        <p className="message-text">{text}</p>
      </div>
      <p className="sent-text">{user}</p>
    </div>
  );
};

export default Message;
