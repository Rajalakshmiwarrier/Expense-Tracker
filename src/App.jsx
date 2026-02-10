import { useEffect, useState } from 'react';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import ThemeToggle from "./components/ThemeToggle";
import './index.css';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [darkMode, setDarkMode] = useState([]);

  useEffect(()=>{
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if(savedTransactions) setTransactions(transactions);
  },[]);

  useEffect(()=>{
    localStorage.setItem("transactions",JSON.stringify(transactions));
  },[transactions]);

  // useEffect(()=>{
  //   const savedTheme = JSON.parse(localStorage.getItem("darkMode"));
  //   if(savedTheme === "true") setDarkMode(true);
  // },[]);

  // useEffect(()=>{
  //   document.body.className = darkMode ? 'dark' :'';
  //   localStorage.setItem("darkMode",darkMode);
  // },[darkMode]);

  const addTransaction = (data) =>{
      setTransactions(prev => [
        ...prev,{id:Date.now(), ...data}
      ]);
  }
  const deleteTransaction = (id) =>{
    setTransactions(prev => 
      prev.filter(t=>t.id !==id)
    );
  }
  return (
    <div className="container">
      
      <h1>💰 Expense Tracker</h1>
      <ThemeToggle />
       <Summary transactions={transactions} />
       <ExpenseForm addTransaction={addTransaction} />
       <ExpenseList
       transactions={transactions}
       deleteTransaction = {deleteTransaction}
       />
    </div>
  )
}
export default App;
