// Icons
import { RxAvatar } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

// Context
import Context from "../context";

// Hooks
import { useContext } from "react";

const Header = () => {
  const {toggleLayout} = useContext(Context);
  
  return (
    <header className="flex justify-between items-start">
      <div className="flex">
        <div className="flex items-center justify-center h-10 w-10 bg-yellow-400 rounded-full mr-3">
          <RxAvatar className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-gray-400 font-bold">Welcome!</p>
          <h1 className="text-lg font-bold text-slate-800">Aygun Aghalarova</h1>
        </div>
      </div>
      <button
        onClick={toggleLayout} 
        className="h-8 w-8 bg-gradient-to-r bg-pink from-pink to-lightblue flex items-center justify-center text-white rounded-full "
      >
        <AiOutlinePlus className="stroke-2" />
      </button>
    </header>
  );
};

export default Header;