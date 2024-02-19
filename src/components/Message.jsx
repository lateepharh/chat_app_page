import React from "react";
import Female from "./utils/female1.jpg";

function Message() {
  return (
    <div className="message owner">
      <div className="messageinfo">
        <img src={Female} alt="" />
        <span>just now</span>
      </div>
      <div className="messagecontent">
        <p>hello</p>
        <img src={Female} alt="" />
      </div>
    </div>
  );
}

export default Message;
