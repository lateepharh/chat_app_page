import React from "react";
import Female from "./utils/female1.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">ChatterBox</span>
      <div className="user">
        <img src={Female} alt="" />
        <span>Lateefat</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
