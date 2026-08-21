import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpanseContext";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(ExpenseContext);

  return (
    <>
      <h2>Credit: ₹ {credit}</h2>

      <h2>Debit: ₹ {debit}</h2>

      <h2>Balance: ₹ {balance}</h2>
    </>
  );
};

export default ExpenseData;
