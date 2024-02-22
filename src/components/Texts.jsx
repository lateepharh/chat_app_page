import { useContext, useEffect, useState } from "react";
import React from "react";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import ChatContext from "./context/ChatContex";

function Texts() {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
      }
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);
  console.log(messages);
  return (
    <div className="text">
      {messages.map((text) => {
        return <Message message={text} key={text.id}></Message>;
      })}
    </div>
  );
}

export default Texts;
