// Icons
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";

// Hooks
import { useContext, useState } from "react";
//context
import Context from "../context"

const Types = () => {
  const { openType, showType, selectType, type } = useContext(Context)
  return (
    <div
      onClick={openType}
      className="relative bg-white p-4 rounded flex items-center cursor-pointer mb-2"
    >
      <div>
        <RiMoneyDollarCircleFill className="h-7 w-7 fill-gray-500" />
      </div>
      <h1 className="ml-5 text-gray-500 font-bold capitalize">
        {type ? type : "type"}
      </h1>

      {showType &&
        <ul className="absolute w-full left-0 p-4 top-0 bg-gray-500 rounded z-10">
          <li
            onClick={(event) => {
              event.stopPropagation()
              selectType('income')
            }}
            className="flex items-cente r bg-white mb-2 p-2 rounded hover:opacity-90"
          >
            <div>
              <GiReceiveMoney className="h-7 w-7 fill-gray-500" />
            </div>
            <h1 className="ml-5 text-gray-500 font-bold">Income</h1>
          </li>
          <li
            onClick={(event) => {
              event.stopPropagation()
              selectType('expense')
            }}
            className="flex items-center bg-white p-2 rounded hover:opacity-90"
          >
            <div>
              <GiPayMoney className="h-7 w-7 fill-gray-500" />
            </div>
            <h1 className="ml-5 text-gray-500 font-bold">Expense</h1>
          </li>
        </ul>}

    </div>
  )
}

export default Types