import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContexProvider } from "./components/context/AuthContex.jsx";
import { ChatContexProvider } from "./components/context/ChatContex.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContexProvider>
    <ChatContexProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ChatContexProvider>
  </AuthContexProvider>
);
