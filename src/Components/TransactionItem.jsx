// Icons
import { GiHamburger } from "react-icons/gi";
// import { AiFillShopping } from "react-icons/ai";

const TransactionsItem = (props) => {
  let amountContent = props.amount.toString()

  if (+props.amount > 0) {
    amountContent = `$${amountContent}`
  } else {
    amountContent = amountContent.replace("-", "-$")
  }
  const days = Math.floor(new Date() - props.date) / (1000 * 24 * 60 * 60)
  let dayContent = "Today"
  if (days === 1) {
    dayContent = "Yesterday"
  } else if (days > 1 && days < 7) {
    dayContent = `${days} days ago`
  } else if (days > 7 && days < 31) {
    dayContent = "This month"
  } else if (days > 31) {
    dayContent = props.date.toLocaleString().slice(0,8)
  }

  return (
    <li className="bg-white p-3 rounded-2xl flex justify-between mb-3">
      <div className="flex items-center">
        <div
          className={`h-10 w-10 text-white mr-3 flex bg-yellow-400 items-center justify-center rounded-full`}
        >
          <GiHamburger />
        </div>
        <p className="font-medium capitalize text-gray-500">{props.category}</p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">{amountContent}</p>
        <p className="text-xs text-right text-gray-500">{dayContent}</p>
      </div>
    </li>
  ) 
}

export default TransactionsItem