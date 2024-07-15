import { FaEllipsisV, FaRegBookmark, FaEyeSlash, FaMinus, FaRegWindowMaximize, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth <= 768); 
    };

    
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  if (isMobileView) {
    return null; 
  }

  return (
    <div className="border-b-[1px] sticky top-0 bg-white border-b-black w-full flex items-center justify-between py-2">
      <div className="ml-2">
        <p className="text-sm">Telegram Web - Telegram</p>
      </div>
      <div className="flex items-center gap-10 mr-4">
        <div className="flex gap-4 items-center">
          <FaEyeSlash />
          <FaRegBookmark />
          <FaEllipsisV />
        </div>
        <div className="flex gap-6 items-center">
          <FaMinus />
          <FaRegWindowMaximize />
          <FaTimes />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
