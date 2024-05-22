import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
  const [expenseYear, setExpenseYear] = useState('2020')
  const filterChangeHandler = (year) => {
    setExpenseYear(year)
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={expenseYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
