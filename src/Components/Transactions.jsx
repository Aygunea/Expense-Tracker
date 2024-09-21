import TransactionItem from './TransactionItem'
//context
import Context from '../context';
//hooks
import { useContext } from 'react';

const Transactions = () => {
  const { transactions } = useContext(Context);
  return (
    <div className="flex-1 overflow-scroll scrollbar-hide">
      <h1 className="text-slate-800 font-bold text-xl ">Transactions</h1>
      <ul className="mt-3">
        {transactions?.map((transaction) => {
          return (
            <TransactionItem
              key={transaction.id}
              amount={transaction.amount}
              category={transaction.category}
              date={transaction.date}
            >
              {transaction.amount}
            </TransactionItem>
          );
        })}
      </ul>
    </div>
  )
}

export default Transactions