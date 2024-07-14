import { FaEllipsisV, FaPuzzlePiece, FaEyeSlash,  FaMinus , FaRegWindowMaximize, FaTimes  } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="border-b-[1px] border-b-black w-full flex items-center justify-between py-2">
      <div>
        <p className="text-sm">Telegram Web - Telegram</p>
      </div>
      <div className="flex items-center gap-10 mr-4">
        <div className="flex gap-4 items-center">
          <FaEyeSlash></FaEyeSlash>
          <FaPuzzlePiece></FaPuzzlePiece>
          <FaEllipsisV></FaEllipsisV>
        </div>
        <div className="flex gap-6 items-center">
            <FaMinus></FaMinus>
            <FaRegWindowMaximize></FaRegWindowMaximize>
            <FaTimes></FaTimes>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
