import React, { useState, useContext } from "react";
import Female from "./utils/female1.jpg";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import AuthContext from "./context/AuthContex";

function Search() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const SearchHandler = async () => {
    //here we are using firebasequery
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleClick = async () => {
    //check wether the group(chat collection in firestore) exist or not, if it doest create it automatically

    //create user chat
    //get user Id

    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const response = await getDoc(doc(db, "chats", combineId));
      if (!response.exists()) {
        //if respoonse doesnt exist create achat in chat collection
        await setDoc(doc, (db, "chats", combineId), { messages: [] });

        //create userchat
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setErr(err);
    }
  };

  const searchKey = (e) => {
    e.code == "Enter" && SearchHandler();
  };
  return (
    <div className="search">
      <div className="searchform">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search for friends"
          onKeyDown={searchKey}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {/* if thers an error */}
      {err && <p>User not found</p>}
      {user && (
        <div className="userchat" onClick={handleClick}>
          <img src={user.photoURL} alt="" />
          <div className="userinfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
