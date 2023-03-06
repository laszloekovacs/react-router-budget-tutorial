import React from "react"
import { useLoaderData } from "react-router-dom"
import { toast } from "react-toastify"
import Intro from "../components/Intro"
import { fetchData } from "../helpers"
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
  const formData = Object.fromEntries(data)

  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    console.log(formData)
    return toast.success(`Welcome, ${formData.userName}`)
  } catch (e) {
    throw new Error("There was a problem creating your account.")
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
