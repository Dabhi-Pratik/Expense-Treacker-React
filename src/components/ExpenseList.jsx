import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpanseContext";

const ExpenseList = () => {
  const { expenseList, DeleteExpense, handleExpenseEdit } =
    useContext(ExpenseContext);

  const [expenseQuery, setExpenseQuery] = useState({
    title: "",
    type: "all",
    category: "all",
    sort: "",
  });

  const handleChange = (field, e) => {
    setExpenseQuery((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const filterList = expenseList
    .filter((l) =>
      l.title.toLowerCase().includes(expenseQuery.title.toLowerCase()),
    )
    .filter((l) =>
      expenseQuery.type === "all"
        ? true
        : l.type.toLowerCase() === expenseQuery.type.toLowerCase(),
    )
    .filter((l) =>
      expenseQuery.category === "all"
        ? true
        : l.category === expenseQuery.category,
    );

  const sortedList = [...filterList].sort((a, b) => {
    if (expenseQuery.sort === "asc") {
      return b.id - a.id;
    }

    if (expenseQuery.sort === "desc") {
      return a.id - b.id;
    }

    if (expenseQuery.sort === "moneyAsc") {
      return Number(a.amount) - Number(b.amount);
    }

    if (expenseQuery.sort === "moneyDsc") {
      return Number(b.amount) - Number(a.amount);
    }
  });

  return (
    <div className="card">
      <h2>Expense List</h2>

      <form className="filter-form">
        <input
          type="text"
          placeholder="Search by title..."
          value={expenseQuery.title}
          onChange={(e) => handleChange("title", e)}
        />

        <select
          value={expenseQuery.type}
          onChange={(e) => handleChange("type", e)}
        >
          <option value="all">All Types</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>

        <select
          value={expenseQuery.category}
          onChange={(e) => handleChange("category", e)}
        >
          <option value="all">All Categories</option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>

        <select
          value={expenseQuery.sort}
          onChange={(e) => handleChange("sort", e)}
        >
          <option value="">Sort By</option>
          <option value="asc">Newest First</option>
          <option value="desc">Oldest First</option>
          <option value="moneyAsc">Amount Low → High</option>
          <option value="moneyDsc">Amount High → Low</option>
        </select>
      </form>

      {sortedList.length > 0 ? (
        <div className="table-container">
          <table className="expense-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {sortedList.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>₹ {data.amount}</td>
                  <td>{data.date}</td>
                  <td>{data.category}</td>
                  <td>{data.type}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => DeleteExpense(data.id)}
                    >
                      Delete
                    </button>{" "}
                    <button
                      className="edit-btn"
                      onClick={() => handleExpenseEdit(data.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>Data Not Found</h3>
      )}
    </div>
  );
};

export default ExpenseList;
