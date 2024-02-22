import React, { useContext, useState } from "react";
import { Picture, Attach } from "./Icons";
import ChatContext from "./context/ChatContex";
import { v4 as uuid } from "uuid";
import AuthContext from "./context/AuthContex";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function ChatInput() {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const sendHandler = async () => {
    //checking if theres a file or not

    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          // setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                //giving a unique id
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                image: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          //giving a unique id
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText(" ");
    setImage(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Typing....."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <Attach />
        <input
          type="file"
          name="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="file">
          <Picture />
        </label>
        <button onClick={sendHandler}>Send</button>
      </div>
    </div>
  );
}

export default ChatInput;
