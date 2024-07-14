const ChatCards = ({ chat }) => {
  const { creator } = chat;
  const name = creator ? creator.name : "unknown";
  return (
    <div className="flex items-center">
      <div className="avatar w-14 h-14">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <p className="font-bold">Name: {name}</p>
    </div>
  );
};

export default ChatCards;
