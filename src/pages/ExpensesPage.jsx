import React from "react"
import { useLoaderData } from "react-router-dom"
import { toast } from "react-toastify"
import Table from "../components/Table"
import {deleteItem, fetchData} from "../helpers"


// loader
export async function expensesLoader() {
  const expenses = fetchData("expenses")
  return { expenses }
}

export async function expensesAction({request}) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data)
  if(_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId
      })
      return toast.success("Expense deleted!")
    } catch(e) {
      throw new Error("There was a problem deleting you expense" + e)
    }
  }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData()
  return <div className="grid-lg">
    <h1>All expenses</h1>
    {
      expenses && expenses.length > 0 ? 
      (
        <div className="grid-md">
          <h2>Recent expenses <small>({expenses.length}) total</small></h2>
          <Table expenses={expenses} />
        </div>
      ) : <p>No expenses to show</p>
    }
  </div>
}

export default ExpensesPage
