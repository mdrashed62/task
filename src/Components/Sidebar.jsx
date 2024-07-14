import { useState, useEffect } from "react";
import ChatCards from "./ChatCards";


const Sidebar = ({ setSelectedChat }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setChats(data.data.data);
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="h-full">
      <div className="flex items-center border-r-gray-300 border-r-[1px] gap-6">
        <div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm w-[90%] bg-gray-100 rounded-full max-w-xs"
          />
        </div>
      </div>
      <div className="grid gap-2">
        {chats.map((chat) => (
          <ChatCards
            key={chat.id}
            chat={chat}
            onClick={handleChatClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
