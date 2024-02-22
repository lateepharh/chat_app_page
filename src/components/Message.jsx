import React, { useContext, useEffect, useRef } from "react";
import Female from "./utils/female1.jpg";
import AuthContext from "./context/AuthContex";
import ChatContext from "./context/ChatContex";

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  console.log(message);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageinfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messagecontent">
        <p>{message.text}</p>
        {message.image && <img src={message.image} alt="" />}
      </div>
    </div>
  );
}

export default Message;
