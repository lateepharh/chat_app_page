import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContexProvider } from "./components/context/AuthContex.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContexProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AuthContexProvider>
);
