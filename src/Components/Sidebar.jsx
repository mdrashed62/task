import { useState, useEffect } from "react";
import ChatCards from "./ChatCards";
import { FaRegBookmark, FaRegUser, FaRegSun, FaRegMoon,FaBug } from "react-icons/fa";
import { FaK, FaRegCirclePlay, FaRegCircleQuestion  } from "react-icons/fa6";

const Sidebar = ({ setSelectedChat }) => {
  console.log("selected", setSelectedChat);
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    setSelectedChatId(chat.id);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full">
      <div className="flex mt-4 ml-2 sticky top-0 bg-white items-center border-r-gray-300 border-r-[1px] gap-6 z-50">
        <div className="relative ">
          <button onClick={toggleDropdown} className="btn btn-square btn-ghost">
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
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 lg:w-64 text-opacity-70 opacity-90 font-bold ml-4 bg-white border rounded-lg shadow-lg z-50">
              <ul className="py-1">
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaRegBookmark></FaRegBookmark> Saved Message
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaRegUser></FaRegUser> Saved Message
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaRegCirclePlay></FaRegCirclePlay> Saved Message
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaRegSun></FaRegSun> Saved Message
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaRegMoon></FaRegMoon> Saved Message
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaRegCircleQuestion></FaRegCircleQuestion> Saved Message
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaBug></FaBug> Saved Message
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                 <FaK></FaK>  Saved Message
                </li>
                <p className="py-3 text-center text-opacity-60 font-normal text-sm">Telegram Web A 10.9.7</p>
              </ul>
            </div>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            className="input border-none  input-sm w-[90%] bg-gray-100 rounded-full max-w-xs"
          />
        </div>
      </div>
      <div className="grid gap-2 mt-3">
        {chats.map((chat) => (
          <ChatCards
            key={chat.id}
            chat={chat}
            onClick={handleChatClick}
            isSelected={chat.id === selectedChatId}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
