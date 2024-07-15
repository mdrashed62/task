import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { FaEllipsisV, FaPhoneAlt } from "react-icons/fa";
import backgroundImg from "../assets/telegram1.jpg";

const ChatWindow = ({ selectedChat }) => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedChat) {
      fetch(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${selectedChat.id}`
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
        className="h-[100%] text-3xl flex items-center text-opacity-70 justify-center font-bold bg-cover bg-center"
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
      <div className="flex sticky top-0 bg-white p-1 items-center justify-between">
        <div className="flex items-center ml-4">
          <Avatar></Avatar>
          <div className="ml-3">
            <h3 className="font-bold">
              {selectedChat?.creator?.name || "Default Value"}
            </h3>
            <p className="text-sm text-opacity-50">
              {selectedChat?.creator?.created_at}
            </p>
          </div>
        </div>
        <div className="mr-10 flex items-center gap-3">
          <button>
            <Search />
          </button>
          <button>
            <FaPhoneAlt />
          </button>
          <button>
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-[100%]"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="p-14 w-full flex flex-wrap">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`w-full md:w-1/2 mb-4 p-2 ${
                index % 2 === 0 ? "pr-2" : "pl-2"
              } ${index % 2 === 0 ? "pt-20" : "pb-4"}`}
            >
              <div className="bg-white rounded-lg p-2 ">
                {message.message}
                <span className="text-[12px] pl-6">
                  {new Date(message.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
