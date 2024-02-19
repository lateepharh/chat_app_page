import React from "react";
import Female from "./utils/female1.jpg";

function Search() {
  return (
    <div className="search">
      <div className="searchform">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search for friends"
        />
      </div>
      <div className="userchat">
        <img src={Female} alt="" />
        <div className="userinfo">
          <span>Jessica</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
