import React from "react";
import Female from "./utils/female1.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import AuthContext from "./context/AuthContex";
import { useContext } from "react";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">ChatterBox</span>
      <div className="user">
        <img src={currentUser.photoURL} alt={currentUser.displayName} />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
