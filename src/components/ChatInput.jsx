import React from "react";
import { Picture, Attach } from "./Icons";

function ChatInput() {
  return (
    <div className="input">
      <input type="text" name="text" id="text" placeholder="Typing....." />
      <div className="send">
        <Attach />
        <input type="file" name="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <Picture />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatInput;
