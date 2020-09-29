import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial State
const initialState = {
  transactions: [
    { id: 1, desc: 'Salary', amount: 1000 },
    { id: 2, desc: 'Gift', amount: -25 },
    { id: 3, desc: 'Food', amount: -5 },
    { id: 4, desc: 'Rent', amount: -800 },
    { id: 5, desc: 'Snacks', amount: -7.36 },
  ]
}


// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}