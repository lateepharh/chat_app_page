import React from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./Pages/style.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./components/context/AuthContex";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  //protected route
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;

// import React from "react";
// import { ChatEngine } from "react-chat-engine";
// import ChatFeeds from "./components/ChatFeed";
// import "./App.css";

// function App() {
//   const renderChatFeeds = (chatAddProps) => {
//     return <ChatFeeds {...chatAddProps} />;
//   };
//   return (
//     <ChatEngine
//       height="100vh"
//       width="100vw"
//       projectID="d5f02302-4a26-4875-ae70-f9f3dad8b857"
//       userName="Lateefat"
//       userSecret="682001"
//       renderChatFeed={renderChatFeeds}
//     />
//   );
// }
