import React from "react";
import AddExpenses from "./components/AddExpenses";
import ExpenseList from "./components/ExpenseList";
import ExpenseData from "./components/ExpenseData";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-container">
        <AddExpenses />
        <ExpenseList />
        <ExpenseData />
      </div>
    </>
  );
};

export default App;
