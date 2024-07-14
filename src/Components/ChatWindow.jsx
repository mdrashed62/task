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
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          if (data.status === "success") {
            setMessages(data.data);
          } else {
            throw new Error(data.message || "Error fetching messages");
          }
        })
        .catch((error) => console.error("Error fetching messages:", error))
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
    <div className="h-full">
      <div className=" flex items-center justify-between">
        <div className="flex items-center ml-4">
          <Avatar></Avatar>
          <div className="ml-3">
          <h3>{selectedChat?.creator?.name || 'Default Value'}</h3>
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
        <h3>Chat Window for {selectedChat.creator.name}</h3>
        {messages.map((message) => (
          <div key={message.id}>{message.message}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
