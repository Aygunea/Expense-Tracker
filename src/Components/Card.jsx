// Components
import CardInfo from "./CardInfo";
//hooks
import { useContext } from "react";

//context
import Context from "../context"

const Card = () => {
  const { transactions } = useContext(Context)

  const incomes = transactions
    ?.filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    ?.filter(t => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = incomes + expenses;

  return (
    <div className="w-full rounded-3xl my-5 py-6 px-5  text-white bg-gradient-to-l bg-pink from-pink to-lightblue">
      <p className="text-center mb-3">Total balance</p>
      <h2 className="text-center text-3xl">$ {balance ? balance : "0"}</h2>
      <div className="flex items-center justify-between mt-5">
        <CardInfo type="income">${incomes ? incomes : "$0"}</CardInfo>
        <CardInfo type="expenses"> {expenses ? String(expenses).replace("-", "-$") : "$0"}</CardInfo>
        {/* <CardInfo type="expenses">{expenses ? Math.abs(expenses) : "0"}</CardInfo> */}
      </div>
    </div>
  );
};

export default Card;