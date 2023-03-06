import React from "react"
import { Form, NavLink } from "react-router-dom"

//assets
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} height={30}></img>
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form method="post" action="/logout">
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  )
}

export default Nav
