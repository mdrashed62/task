import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import ChatWindow from "../Components/ChatWindow";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    if (isMobileView) {
      setIsSidebarVisible(false);
    }
  };

  const handleBackToSidebar = () => {
    setIsSidebarVisible(true);
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="grid grid-cols-4">
        <div className={`w-full col-span-4 lg:col-span-1 ${isMobileView && !isSidebarVisible ? 'hidden' : 'block'}`}>
          <Sidebar setSelectedChat={handleChatSelect} />
        </div>
        <div className={`col-span-4 lg:col-span-3 ${isMobileView && isSidebarVisible ? 'hidden' : 'block'}`}>
          <ChatWindow selectedChat={selectedChat} onBack={handleBackToSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Home;
