import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"
import Nav from "../components/Nav"
import wave from "../assets/wave.svg"

export function mainLoader() {
  const userName = fetchData("userName")
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  return (
    <div className="layout">
      <Nav userName={userName} />
      <h1>{userName}</h1>
      <main>
        <Outlet />
        <img src={wave}></img>
      </main>
    </div>
  )
}

export default Main
