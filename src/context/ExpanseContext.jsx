import { createContext, useEffect, useReducer } from "react";

export const ExpenseContext = createContext({
  expenseList: [],
  AddExpense: () => {},
  DeleteExpense: () => {},
  handleExpenseEdit: () => {},
  editValue: null,
  balance: 0,
  credit: 0,
  debit: 0,
});

const initialValue = {
  expenseList: [
    {
      id: 1,
      title: "Pizza",
      description: "Eat at restorenet with Friends",
      amount: 300,
      date: "2026-08-18",
      category: "Food",
      type: "Debit",
    },
  ],
  editValue: null,
};

const init = () => {
  try {
    const saved = localStorage.getItem("expense");

    console.log("saved", saved);

    return saved
      ? {
          ...initialValue,
          expenseList: JSON.parse(saved),
        }
      : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const input = action.payload;

      if (state.editValue !== null) {
        const updateList = state.expenseList.map((list) => {
          list.id === state.editValue.id ? { ...list, ...input } : list;
        });
        return {
          ...state,
          expenseList: updateList,
          editValue: null,
        };
      } else {
        const newExpense = {
          id: new Date().getTime(),
          title: input.title,
          description: input.description,
          amount: input.amount,
          date: input.date,
          category: input.category,
          type: input.type,
        };

        return {
          ...state,
          expenseList: [...state.expenseList, newExpense],
        };
      }
    }

    case "delete": {
      const id = action.payload;

      const remainExpenseList = state.expenseList.filter((l) => l.id !== id);

      return {
        ...state,
        expenseList: remainExpenseList,
      };
    }

    case "edit": {
      const value = action.payload;

      return {
        ...state,
        editValue: value,
      };
    }
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialValue, init);

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(state.expenseList));
  }, [state.expenseList]);

  const AddExpense = (input) => {
    dispatch({ type: "add", payload: input });
  };

  const DeleteExpense = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleExpenseEdit = (id) => {
    const editExpense = state.expenseList.find((l) => l.id === id);

    dispatch({ type: "edit", payload: editExpense });
  };

  const credit = state.expenseList
    .filter((l) => l.type === "Credit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.amount));
    }, 0);

  const debit = state.expenseList
    .filter((l) => l.type === "Debit")
    .reduce((acc, curr) => {
      return (acc += Number(curr.amount));
    }, 0);

  const balance = credit - debit;

  const values = {
    expenseList: state.expenseList,
    AddExpense,
    DeleteExpense,
    handleExpenseEdit,
    editValue: state.editValue,
    credit,
    debit,
    balance,
  };

  return (
    <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
