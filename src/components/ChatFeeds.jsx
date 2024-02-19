import React from "react";
import { Phone, Camera, More } from "./Icons";
import Texts from "./Texts";
import ChatInput from "./ChatInput";

function ChatFeeds() {
  return (
    <section className="chatfeeds">
      <div className="chatinfo">
        <span>Jessica</span>
        <div className="chaticons">
          <Camera />
          <Phone />
          {/* <More /> */}
        </div>
      </div>
      <Texts />
      <ChatInput />
    </section>
  );
}

export default ChatFeeds;
