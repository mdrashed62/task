import { useEffect, useState } from "react";
import ChatCards from "./ChatCards";

const Sidebar = () => {
  const [chats, setChats] = useState([]);

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
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-full mt-4 bg-slate-50">
      <div className="flex items-center gap-6">
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
            placeholder="Type here"
            className="input input-sm w-[90%] rounded-full max-w-xs"
          />
        </div>
      </div>
     <div className="space-y-2">
     {chats.map((chat) => (
        <ChatCards key={chat.id} chat={chat}></ChatCards>
      ))}
     </div>
    </div>
  );
};

export default Sidebar;
