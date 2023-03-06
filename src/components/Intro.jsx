import React from "react"
import { Form } from "react-router-dom"
import { UserPlusIcon } from "@heroicons/react/24/solid"
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take controll of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret is financial freedom. Start your
          journey today
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20}></UserPlusIcon>
          </button>
        </Form>
      </div>
      <img src={illustration} alt="person with money" width={600}></img>
    </div>
  )
}

export default Intro
