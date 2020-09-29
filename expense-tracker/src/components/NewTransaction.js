import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

const NewTransaction = () => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random() * 999999999),
      desc, 
      amount,
    }

    addTransaction(newTrans)
  }

  return (
    <div className="new-trans">
      <h2>Add Transaction</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Description</label>
        <input
          className="input-ctrl"
          type="text"
          name="transaction-desc"
          placeholder="Transaction description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required />
        <label htmlFor="number">Amount</label>
        <input
          className="input-ctrl"
          type="number"
          name="transaction-amount"
          placeholder="Transaction amount..."
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          required />
        <button className="input-ctrl input-btn" type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default NewTransaction
