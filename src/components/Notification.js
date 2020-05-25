import React from 'react';

const Notification = (props) => {
  setTimeout(() => {
    props.hideNotification();
  }, 4000);

  return (
    <>
      <div className="notification">
        <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt=""></img>
        <p>Todos were updated!</p>
      </div>
    </>
  );
};

export default Notification;