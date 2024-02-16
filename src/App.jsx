import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeeds from "./components/ChatFeed";
import "./App.css";

function App() {
  const renderChatFeeds = (chatAddProps) => {
    return <ChatFeeds {...chatAddProps} />;
  };
  return (
    <ChatEngine
      height="100vh"
      width="100vw"
      projectID="d5f02302-4a26-4875-ae70-f9f3dad8b857"
      userName="Lateefat"
      userSecret="682001"
      renderChatFeed={renderChatFeeds}
    />
  );
}

export default App;
