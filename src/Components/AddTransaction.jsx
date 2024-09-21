import { GrFormClose } from "react-icons/gr";
import Types from "./Types";
import Categories from "./Categories";
import Context from "../context";
import { useContext, useRef, useEffect } from "react";

const AddTransaction = () => {
  const { toggleLayout, addTransaction, type, category, transactions, setCategory } = useContext(Context);
  const amountRef = useRef();

  const balance = transactions?.reduce((acc, transaction) => acc + +transaction.amount, 0);

  useEffect(() => {
    if (type === "income") {
      setCategory("income");
    }
  }, [type, setCategory]);

  const add = () => {
    if (!amountRef.current.value || !type || !category) {
      return;
    }

    let amount = +amountRef.current.value;

    if (type === "expense") {
      amount = -Math.abs(amount);
    }

    if (Math.abs(amount) > balance && type === "expense") {
      return; 
    }

    const transactionObject = {
      amount: amount,
      type: type,
      category: type === "income" ? "income" : category,
      id: Math.random().toString(),
      date: new Date(),
    };

    addTransaction(transactionObject);
    amountRef.current.value = "";
  };

  return (
    <div className="h-full relative flex items-center flex-col">
      <button
        onClick={toggleLayout}
        className="absolute top-0 right-0 border h-6 w-6 border-black rounded-full flex items-center justify-center"
      >
        <GrFormClose />
      </button>
      <h1 className="text-xl text-slate-500 font-bold mb-5 placeholder:text-slate-500">Add Transaction</h1>
      <form className="flex justify-center mb-5">
        <input
          ref={amountRef}
          type="text"
          placeholder="0"
          className="focus:outline-none p-5 rounded-xl text-2xl text-center inline-block w-1/2"
        />
      </form>

      <div className="w-full">
        <Types />
        {type === "expense" && <Categories />}
      </div>

      <button
        onClick={add}
        className="absolute bottom-10 w-full p-2 text-white rounded bg-gradient-to-r bg-pink from-pink to-lightblue"
      >
        Save
      </button>
    </div>
  );
};

export default AddTransaction;
