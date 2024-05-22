import './ExpenseItem.css'
import ExpensDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'

function ExpenseItem(props) {
  // let title = props.title

  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated')
    console.log(title)
  }

  return (
    <li>
      <Card className="expense-item ">
        <ExpensDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}£</div>
        </div>
        <button onClick={clickHandler}> Change Title</button>
      </Card>
    </li>
  )
}

export default ExpenseItem
