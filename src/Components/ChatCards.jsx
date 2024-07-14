import { useState } from "react";
import { Avatar } from "@mui/material";

const ChatCards = ({ chat, onClick }) => {
  const { creator } = chat;
  const [isSelected, setIsSelected] = useState(false);
  const name = creator ? creator.name : "unknown";

  const handleCardClick = () => {
    setIsSelected(true);
    onClick(chat);
  };

  return (
    <div className="w-full ml-2">
      <button
        onClick={handleCardClick}
        className={`w-[95%] rounded-lg p-1 hover:bg-gray-200 transition duration-200 ease-in-out ${isSelected ? 'bg-blue-500' : ''}`}
      >
        <div className="flex w-[100%] items-center">
          <Avatar />
          <div className="ml-3">
            <p className="font-bold">{name}</p>
            <p>Last message</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ChatCards;
