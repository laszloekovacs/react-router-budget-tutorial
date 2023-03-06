import React from "react"
import { useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"

// loader
export function dashBoardLoader() {
  const userName = fetchData("userName")
  return { userName }
}

const Dashboard = () => {
  const { userName } = useLoaderData()
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{userName}</p>
    </div>
  )
}

export default Dashboard
