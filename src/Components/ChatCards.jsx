

const ChatCards = ({ chat, onClick }) => {
  const { creator } = chat;
  const name = creator ? creator.name : "unknown";

  return (
   <div>
     <button onClick={() => onClick(chat)}>
      <div className="flex items-center">
        <div className="avatar w-14 h-14">
          <div className="w-24 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>Last message</p>
        </div>
      </div>
    </button>
   </div>
  );
};

export default ChatCards;
