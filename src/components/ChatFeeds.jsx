import React, { useContext } from "react";
import { Phone, Camera, More } from "./Icons";
import Texts from "./Texts";
import ChatInput from "./ChatInput";
import ChatContext from "./context/ChatContex";

function ChatFeeds() {
  const { data } = useContext(ChatContext);
  return (
    <section className="chatfeeds">
      <div className="chatinfo">
        <span>{data.user?.displayName}</span>
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
