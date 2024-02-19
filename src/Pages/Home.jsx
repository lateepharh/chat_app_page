import React from "react";
import PageSideBar from "../components/PageSideBar";
import ChatFeeds from "../components/ChatFeeds";
function Home() {
  return (
    <main className="home">
      <div className="container">
        <PageSideBar />
        <ChatFeeds />
      </div>
    </main>
  );
}

export default Home;
