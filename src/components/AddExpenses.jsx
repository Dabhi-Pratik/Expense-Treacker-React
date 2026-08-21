import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpanseContext";

const AddExpenses = () => {
  const { AddExpense, editValue } = useContext(ExpenseContext);

  const [input, setInput] = useState({
    title: "",
    description: "",
    amount: 0,
    date: "",
    category: "General Expense",
    type: "Debit",
  });

  useEffect(() => {
    if (editValue) {
      setInput(editValue);
    }
  }, [editValue]);

  const handleChange = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AddExpense(input);

    setInput({
      title: "",
      description: "",
      amount: 0,
      date: "",
      category: "General Expense",
      type: "Debit",
    });
  };

  return (
    <div className="card">
      <h2>{editValue ? "Update Expense" : "Add Expense"}</h2>

      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={input.title}
            placeholder="Enter Title"
            onChange={(e) => handleChange("title", e)}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={input.description}
            placeholder="Enter Description"
            onChange={(e) => handleChange("description", e)}
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={input.amount}
            onChange={(e) => handleChange("amount", e)}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={input.date}
            onChange={(e) => handleChange("date", e)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            value={input.category}
            onChange={(e) => handleChange("category", e)}
          >
            <option value="Money Transfer">Money Transfer</option>
            <option value="Cash Withdrawal">Cash Withdrawal</option>
            <option value="General Expense">General Expense</option>
            <option value="Food&Dining">Food&Dining</option>
            <option value="HealthCare">HealthCare</option>
            <option value="Shopping">Shopping</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        <div className="form-group">
          <label>Type</label>
          <select value={input.type} onChange={(e) => handleChange("type", e)}>
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
        </div>

        <button className="submit-btn" type="submit">
          {editValue ? "Update" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default AddExpenses;
