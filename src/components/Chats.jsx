import React from "react";
import Female from "./utils/female1.jpg";

function Chats() {
  return (
    <div className="chats">
      <div className="userchat">
        <img src={Female} alt="" />
        <div className="userchatinfo">
          <span>Jessica</span>
          <p>Good Morning</p>
        </div>
      </div>
      <div className="userchat">
        <img src={Female} alt="" />
        <div className="userchatinfo">
          <span>Jessica</span>
          <p>Good Morning</p>
        </div>
      </div>
      <div className="userchat">
        <img src={Female} alt="" />
        <div className="userchatinfo">
          <span>Jessica</span>
          <p>Good Morning</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
