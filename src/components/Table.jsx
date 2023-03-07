import React from 'react'
import ExpenseItem from './ExpenseItem'

const Table = ({expenses}) => {
  return (
    <div className="table">
        <thead>
            <tr>
                {
                    ["Name", "Amount", "Date"].map((i, index) => (
                        <th key={index}>{i}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {expenses.map(expense => (
                <tr key={expense.id}>
                    <ExpenseItem expense={expense} />
                </tr>
            ))}
        </tbody>
    </div>
    
  )
}

export default Table