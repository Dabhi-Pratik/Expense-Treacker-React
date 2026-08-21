# Expense Tracker React

A simple **Expense Tracker** web application built using **React.js**.

This project helps users manage their daily expenses by adding, editing, deleting, sorting, and viewing expense records.

## 🚀 Live Demo

https://shiny-profiterole-1b63f0.netlify.app/

## 📸 Screenshots

<img width="1919" height="951" alt="image" src="https://github.com/user-attachments/assets/315438d5-dc08-4bcb-8ba5-52be31102dae" />

## 📸 Video
https://drive.google.com/file/d/1bLqw8nO_FpMVc7hCFHYoneWWyaxmWhjb/view?usp=sharing
---

## ✨ Features

* Add new expenses
* Edit expenses
* Delete expenses
* Debit and Credit transactions
* Calculate total balance
* Sort expense records
* Store data using Local Storage
* Display expense list in a table
* Simple and responsive UI

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* Local Storage
* React Context API
* useReducer Hook

---

## 📚 React Topics Used

While creating this project, I practiced the following React concepts:

### 1. Components

I divided the application into different reusable components such as:

* Add Expenses
* Expense List
* Expense Data

This makes the application easier to manage and understand.

### 2. useState

Used for managing component-level state and form data.

### 3. useContext

Used **Context API** to share expense data between different components without passing props through every component.

### 4. useReducer

Used `useReducer` to manage expense-related operations such as:

* Add Expense
* Delete Expense
* Edit Expense
* Update Expense

### 5. Props

Used props to pass required data and functions between components.

### 6. Local Storage

Used browser `localStorage` to save expense data.

This allows the expense records to remain available even after refreshing the page.

### 7. Array Methods

Used JavaScript array methods such as:

* `map()`
* `filter()`
* `sort()`
* `reduce()`

These methods helped me display, delete, sort, and calculate expense data.

---

## 🧮 Expense Calculation

The application calculates:

### Credit

Total amount received.

### Debit

Total amount spent.

### Balance

```text
Balance = Credit - Debit
```

This gives the user a quick overview of their current financial balance.

---

## 🔄 How I Made This Project

### Step 1 — Created React Project

I created the project using Vite.

```bash
npm create vite@latest
```

Then selected React as the framework.

### Step 2 — Created Components

I divided the application into separate components.

For example:

```text
src/
│
├── components/
│   ├── AddExpenses.jsx
│   ├── ExpenseList.jsx
│   └── ExpenseData.jsx
│
├── context/
│   └── ExpenseContext.jsx
│
├── App.jsx
└── main.jsx
```

### Step 3 — Created Context

I created an `ExpenseContext` to manage the expense data globally.

### Step 4 — Used useReducer

I created a reducer to handle different expense operations:

```text
ADD_EXPENSE
DELETE_EXPENSE
EDIT_EXPENSE
```

### Step 5 — Added Expense Form

I created a form where the user can enter:

* Title
* Description
* Amount
* Category
* Type

### Step 6 — Displayed Expenses

The expense records are displayed in a table.

### Step 7 — Added Credit, Debit & Balance

I used JavaScript calculations to calculate:

```text
Credit
Debit
Balance
```

### Step 8 — Added Sorting

I added sorting functionality to organize the expense records.

### Step 9 — Added Local Storage

Finally, I used `localStorage` so that expense data is saved in the browser.

---

## ▶️ Run This Project Locally

Clone the repository:

```bash
git clone https://github.com/Dabhi-Pratik/Expense-Treacker-React.git
```

Go into the project folder:

```bash
cd Expense-Treacker-React
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

---

## 🎯 What I Learned

By creating this project, I learned and practiced:

* React components
* Context API
* `useReducer`
* `useState`
* Props
* Form handling
* Event handling
* JavaScript array methods
* Local Storage
* CRUD operations
* Sorting
* State management
* React project structure

---

## 🌐 Project Links

**Live Demo:**
https://shiny-profiterole-1b63f0.netlify.app/

**GitHub Repository:**
https://github.com/Dabhi-Pratik/Expense-Treacker-React

**Project Explanation Video:**
Add your YouTube video link here.

---

## 👨‍💻 Author

**Pratik Dabhi**

IT Engineering Student | Frontend / Full-Stack Developer

GitHub:
https://github.com/Dabhi-Pratik
