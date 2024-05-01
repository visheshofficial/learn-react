import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseData = (changedExpenseData) => {
    const expenseData = {
      ...changedExpenseData,
      id: Math.random().toString(),
    }
    console.log('inside saveExpenseData')
    // console.log(expenseData)
    stopEddingNewExpense()
    props.onAddExpense(expenseData)
  }
  const [isAddingNewExpense, setisAddingNewExpense] = useState(false)
  const startEddingNewExpense = () => setisAddingNewExpense(true)
  const stopEddingNewExpense = () => setisAddingNewExpense(false)
  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button onClick={startEddingNewExpense}>Add New Expense</button>
      )}
      {isAddingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancelExpenseData={stopEddingNewExpense}
        />
      )}
    </div>
  )
}

export default NewExpense
