import React from "react";

const SuggestedChat = ({ setChatLog, setShowMenu }) => {
  return (
    <div
      className="sideMenuButton"
    >
      Suggested Chats
    </div>
  );
};

const NewChat = ({ setChatLog, setShowMenu }) => {
  return (
    <div
      className="sideMenuButton"
    >
      Previous Chats
    </div>
  );
};

export { NewChat, SuggestedChat };
