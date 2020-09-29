import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'


const TransactionItem = ({ id, desc, amount }) => {
  const income = amount > 0;
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <span className={`trans-item ${income ? "income" : "expense"}`}>
        <h4>{desc}</h4>
        <span className="amount-w-btn">
          <p>{income ? '' : '-'}£{Math.abs(amount).toFixed(2)}</p>
          <button
            className="remove-trans-btn"
            onClick={() => deleteTransaction(id)}  
          >🗑</button>
        </span>
      </span>
    </>
  )
}

export default TransactionItem