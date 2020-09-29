import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import ExpenseHeader from './components/ExpenseHeader'
import TransactionHistory from './components/TransactionHistory'
import NewTransaction from './components/NewTransaction'

import { GlobalProvider } from './context/GlobalState'




import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <header>
          <Header />
        </header>
        <main>
          <Balance />
          <ExpenseHeader />
          <TransactionHistory />
          <NewTransaction />
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
