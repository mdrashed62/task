import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ChatWindow from "../Components/ChatWindow";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1">
          <Sidebar setSelectedChat={setSelectedChat} />
        </div>
        <div className="col-span-3">
          <ChatWindow selectedChat={selectedChat} />
        </div>
      </div>
    </div>
  );
};

export default Home;
