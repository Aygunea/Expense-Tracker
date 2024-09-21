// Icons
import { BiSolidCategory } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import { AiFillShopping } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { BsFillAirplaneFill } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import { PiDogBold } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";

//context
import Context from "../context"

//hooks
import { useContext } from "react";
import context from "../context";

// Data
const data = [
  { name: "Food", color: "yellow", icon: GiHamburger },
  { name: "Shopping", color: "red", icon: AiFillShopping },
  { name: "Transport", color: "indigo", icon: AiFillCar },
  { name: "Travel", color: "blue", icon: BsFillAirplaneFill },
  { name: "Entertainment", color: "green", icon: GiGamepad },
  { name: "Pet", color: "purple", icon: PiDogBold },
  { name: "Personal", color: "orange", icon: BsPersonFill },
];

const Categories = () => {
  const { category, showCategory, selectCategory, openCategory } = useContext(context)

  return (
    <div
      onClick={openCategory}
      className="relative bg-white p-4 rounded flex items-center cursor-pointer"
    >
      <div>
        <BiSolidCategory className="h-7 w-7 fill-gray-500" />
      </div>
      <h1 className="ml-5 text-gray-500 font-bold capitalize">
        {category ? category : "category"}
      </h1>

      {showCategory && <ul className="absolute w-full left-0 p-4 top-0 bg-gray-500 rounded z-10 h-64  overflow-scroll scrollbar-hide ">
        {data.map((cat, index) => {
          return (
            <li
              onClick={(event) => {
                event.stopPropagation()
                selectCategory(cat.name)

              }}
              key={index}
              className="flex items-center bg-white mb-2 p-2 rounded hover:opacity-90"
            >
              <div
                className={`border border-gray-500 h-7 w-7 flex items-center justify-center rounded-full text-gray-500`}
              >
                <cat.icon className={`h-4 w-4`} />
              </div>
              <h1 className="ml-5 text-gray-500 font-bold">{cat.name}</h1>
            </li>
          );
        })}
      </ul>}
    </div>
  );
};

export default Categories;