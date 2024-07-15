import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import backgroundImg from "../assets/telegram1.jpg";

const ChatWindow = ({ selectedChat }) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedChat) {
      fetch(
        `https://devapi.beyondchats.com/api/get_chat_messages/${selectedChat.id}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status === "success") {
            setMessages(data.data);
          } else {
            throw new Error(data.message || "Error fetching messages");
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [selectedChat]);

  if (!selectedChat) {
    return (
      <div
        className="h-[100%] text-3xl flex items-center justify-center font-bold bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        Select a chat to view messages
      </div>
    );
  }

  if (loading) {
    return <div className="h-full mt-4 bg-slate-400">Loading messages...</div>;
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className=" flex sticky top-0 bg-white p-1 items-center  justify-between">
        <div className="flex items-center ml-4">
          <Avatar></Avatar>
          <div className="ml-3">
            <h3 className="font-bold">{selectedChat?.creator?.name || "Default Value"}</h3>
            <p>Last seen</p>
          </div>
        </div>
        <div className="mr-10 flex items-center gap-3">
          <button>
            <Search></Search>
          </button>
          <button>
            <FaPhoneAlt></FaPhoneAlt>
          </button>
          <button>
            <FaEllipsisV></FaEllipsisV>
          </button>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-[100%]"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <h3 className="text-center font-bold pt-6">Chat Window for {selectedChat.creator.name}</h3>
        
        <div className="mt-10 w-2/4 flex p-2">
          <p className=" bg-white rounded-lg p-2 mb-10">
            {messages?.data?.message}
            <span className="text-[12px] pl-6">12:40 pm</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
