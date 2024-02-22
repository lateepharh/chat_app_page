import React, { useContext, useEffect, useState } from "react";
import Female from "./utils/female1.jpg";
import { doc, onSnapshot } from "firebase/firestore";
import AuthContext from "./context/AuthContex";
import { db } from "../firebase";
import ChatContext from "./context/ChatContex";

function Chats() {
  //we are fetching our conversation here
  const [chat, setChat] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    //realtime messages i.e latest
    const getChat = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChat(doc.data());
        console.log("current :", doc.data());
      });

      return () => {
        unsub();
      };
    };
    if (currentUser.uid) {
      getChat();
    }
  }, [currentUser.uid]);
  //this object.entries changes an object to an array
  // console.log(Object.entries(chat));

  const clickHandler = (u) => {
    //we are updating our user
    dispatch({ type: "Change_User", payload: u });
  };
  return (
    <div className="chats">
      {Object.entries(chat)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chats) => {
          return (
            <div
              className="userchat"
              key={chats[0]}
              onClick={() => clickHandler(chats[1].userInfo)}
            >
              <img src={chats[1].userInfo.photoURL} alt="profile pics" />
              <div className="userchatinfo">
                <span>{chats[1].userInfo.displayName}</span>
                <p>{chats[1].lastMessage?.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Chats;
