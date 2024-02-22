import React, { useContext, useReducer } from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import AuthContext from "./AuthContex";

const ChatContext = createContext();

export function ChatContexProvider(props) {
  const { children } = props;
  const { currentUser } = useContext(AuthContext);
  const initialState = {
    chatId: "null",
    user: {},
  };
  const chatReducer = (state, action) => {
    //we aere going to have only one action here:changeUser
    switch (action.type) {
      case "Change_User":
        return {
          //updating our user firstly
          user: action.payload,
          //update chatId
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(chatReducer, initialState);
  //we're going to be able dispatch our action(change_user) and updatechat id
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
