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
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  )
}

export default NewExpense
