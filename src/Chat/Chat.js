import React from "react";
function Chat({ val }) {
  return (
    <div role="button" className="mr-2">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-chat-square"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
      </svg>
      <span>{val}</span>
    </div>
  );
}
export default Chat;
