import React from "react"
import { formatCurrency, formatDateToLocaleString } from "../helpers"

const ExpenseItem = ({ expense }) => {
  const { name, amount, createdAt } = expense

  return (
    <>
      <td>{name}</td>
      <td>{formatCurrency(amount)}</td>
      <td>{formatDateToLocaleString(createdAt)}</td>
    </>
  )
}

export default ExpenseItem
