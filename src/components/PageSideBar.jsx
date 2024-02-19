import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

function PageSideBar() {
  return (
    <section className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </section>
  );
}

export default PageSideBar;
