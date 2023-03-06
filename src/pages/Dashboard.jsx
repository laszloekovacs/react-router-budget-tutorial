import React from "react"
import { useLoaderData } from "react-router-dom"
import { toast } from "react-toastify"
import Intro from "../components/Intro"
import { fetchData, createBudget } from "../helpers"
import AddBudgetForm from "../components/AddBudgetForm"

// loader
export function dashBoardLoader() {
  const userName = fetchData("userName")
  const budgets = fetchData("budgets")
  return { userName, budgets }
}

//action
export async function dashboardAction({ request }) {
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
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData()
  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* budgets ? */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm></AddBudgetForm>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  )
}

export default Dashboard
