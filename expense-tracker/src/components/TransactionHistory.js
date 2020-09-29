import React, { useContext } from 'react'
import TransactionItem from './TransactionItem'
import { GlobalContext } from '../context/GlobalState'

const TransactionHistory = () => {

  const context = useContext(GlobalContext)

  return (
    <div className="trans-history">
      <h2>Transaction History</h2>
      <div className="scrollable">
        {context.transactions.map(trans => <TransactionItem
          key={trans.id}
          id={trans.id}
          desc={trans.desc}
          amount={trans.amount} 
        />)}
      </div>
    </div>
  )
}

// class name trans-comp

export default TransactionHistory
