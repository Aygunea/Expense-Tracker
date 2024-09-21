// Icons
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const CardInfo = (props) => {
  return (
    <div className="flex items-center">
      <div
        className={`mr-3 bg-white  h-6 w-6 flex items-center justify-center rounded-full ${
          props.type === "income" ? "text-green-500" : "text-red-500"
        }`}
      >
        {props.type === "income" ? (
          <AiOutlineArrowUp />
        ) : (
          <AiOutlineArrowDown />
        )}
      </div>
      <div>
        <span className="text-xs capitalize">{props.type}</span>
        <p className="font-bold text-sm">{props.children}</p>
      </div>
    </div>
  );
};

export default CardInfo;