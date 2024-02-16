import React from "react";
// import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";
import { ChatFeed } from "react-chat-engine";

function ChatFeeds(props) {
  //   console.log(props);
  const { chats, activeChat, messages, userName } = props;

  //Finding our current chat(specific active chat)
  const chat = chats && chats[activeChat];

  //Function for generating Messages
  const renderMessages = () => {
    const keys = Object.keys(messages);
    console.log(keys);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const MyMessages = message.sender.username === "Lateefat";

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {MyMessages ? (
              <MyMessage message={message} />
            ) : (
              // <div>{message.text}</div>
              <OthersMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipt"
            style={{
              marginRight: MyMessages ? "18px" : "0px",
              marginLeft: MyMessages ? "0px" : "60px",
            }}
          >
            Read-Reciept
          </div>
        </div>
      );
    });
  };

  if (!chat) {
    return <p>Loading....</p>;
  }
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>

      <ChatFeed {...props} customRenderMessage={renderMessages} />
      {/* <div style={{ height: "100px" }}></div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} /> */}
      {/* </div> */}
    </div>
  );
}

export default ChatFeeds;
