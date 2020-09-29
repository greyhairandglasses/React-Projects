import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'


const ExpenseHeader = () => {

  const { transactions } = useContext(GlobalContext)
  
  const income = transactions
    .filter(trans => trans.amount > 0)
    .reduce((total, trans) => (total += trans.amount), 0)
    .toFixed(2)
  
  const expense = transactions
    .filter(trans => trans.amount < 0)
    .reduce((total, trans) => (total += trans.amount), 0)
    .toFixed(2)

  return (
    <div className="expense-header">
      <div className="header-income">
        <h4>Income</h4>
        <p>£{income}</p>
      </div>
      <div className="divider"></div>
      <div className="header-expenses">
        <h4>Expense</h4>
        <p>£{Math.abs(expense)}</p>
      </div>
    </div>
  )
}

export default ExpenseHeader
