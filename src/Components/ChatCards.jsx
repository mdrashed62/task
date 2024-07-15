import { Avatar } from "@mui/material";

const ChatCards = ({ chat, onClick, isSelected }) => {
  const { creator } = chat;
  const name = creator ? creator.name : "unknown";

  const handleCardClick = () => {
    onClick(chat); 
  };

  return (
    <div className="ml-2">
      <button
        onClick={handleCardClick}
        className={`w-[95%] rounded-lg p-1 hover:bg-gray-200 transition duration-200 ease-in-out ${isSelected ? 'bg-blue-500' : ''}`}
      >
        <div className="flex items-center">
          <Avatar />
          <div className="ml-3">
            <p className="font-bold opacity-70">{name}</p>
            <p className="text-sm">Last message</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ChatCards;
