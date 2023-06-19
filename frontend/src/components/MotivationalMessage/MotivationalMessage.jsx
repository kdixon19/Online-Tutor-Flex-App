import React from "react";

const MotivationMessage = ({ correctCounter }) => {
  let message = "";

  if (correctCounter === 0) {
    message = "You haven't completed any questions yet. Keep going!";
  } else if (correctCounter === 1) {
    message = "You're Done";
  };

  return <div>{message}</div>;
};

export default MotivationMessage;
