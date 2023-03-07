import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { toast } from "react-toastify"
import {
  fetchData,
  createBudget,
  createExpense,
  waait,
  deleteItem,
} from "../helpers"
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm"
import BudgetItem from "../components/BudgetItem"
import Table from "../components/Table"

// loader
export function dashBoardLoader() {
  const userName = fetchData("userName")
  const budgets = fetchData("budgets")
  const expenses = fetchData("expenses")
  return { userName, budgets, expenses }
}

//action
export async function dashboardAction({ request }) {
  await waait()
  const data = await request.formData()
  const { _action, userName, ...values } = Object.fromEntries(data)
  console.log(_action)

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(userName))
      return toast.success(`Welcome, ${userName}`)
    } catch (err) {
      throw new Error("There was a problem creating your account:" + err)
    }
  }

  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount })
      return toast.success("budget created")
    } catch (err) {
      throw new Error("There was a problem creating your budget.")
    }
  }

  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      })
      return toast.success(`Expense ${values.newExpense} created`)
    } catch (err) {
      throw new Error("There was a problem creating your expense")
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteItem({ key: "expenses", id: values.expenseId })
      return toast.success(`Expense deleted!`)
    } catch (err) {
      throw new Error("Tehere was a problem deleting your expense")
    }
  }
}

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData()
  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
                {expenses && expenses.length > 0 && (
                  <div className="grid-lg">
                    <h2>Recent Expenses</h2>
                    <Table
                      expenses={expenses
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 8 && (
                      <Link to="expenses" className="btn btn--dark">
                        View all expenses{" "}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  )
}

export default Dashboard
