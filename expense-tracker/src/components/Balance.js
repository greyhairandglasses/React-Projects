import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

  const { transactions } = useContext(GlobalContext)
  const balance = transactions.reduce((balance, transaction) => {
    return balance += transaction.amount
  }, 0)
    .toFixed(2)
  const negative = balance < 0;

  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h3>{negative ? '-' : ''}£{Math.abs(balance)}</h3>
    </div>
  )
}

export default Balance
