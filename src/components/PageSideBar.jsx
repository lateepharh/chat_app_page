import React from "react";
import Navbar from "./Navbar";
import Chats from "./Chats";
import Search from "./Search";

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
