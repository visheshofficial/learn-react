import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    changedTitle: '',
    changedAmount: '',
    changedDate: '',
  })

  // const [changedTitle, setChangedTitle] = useState('')
  // const [changedAmount, setChangedAmount] = useState('')
  // const [changedDate, setChangedDate] = useState('')

  //   const titleChangeHandler = (event) => {
  //     /*
  //     Functional Update with Object Destructuring (Current Implementation):
  // This approach utilizes a functional update to ensure that the state is updated based on the previous state (prevState). It spreads the previous state (prevState) and updates only the changedAmount property, leaving other properties unchanged.Advantages:
  // Ensures that the state is updated correctly, especially in asynchronous scenarios where state updates might be batched.
  // Guarantees that you're always working with the latest state.
  // Suitable for more complex state updates and scenarios.
  //     */
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         changedTitle: event.target.value,
  //       }
  //     })

  //     // setUserInput({
  //     //   ...userInput,
  //     //   changedTitle: event.target.value,
  //     // })
  //     /**
  //  n this approach, the state is directly updated without using a functional update. It spreads the current userInput object and updates only the changedAmount property.Advantages:
  // Simplicity: Directly updates the state without the need for a functional update.
  // Clear and concise code for simple state updates.
  //  */

  //     // setChangedTitle(event.target.value)
  //     // console.log('title chnaged')

  //     /**
  //      If you were using individual state variables for each input field, this approach would directly update the changedAmount state variable.Advantages:
  // Simple and straightforward for managing individual state variables.
  // Suitable for simpler forms with fewer input fields.
  // Suggested Best Approach:
  // Given the context of the provided code and the need to manage multiple input fields within a form, the functional update with object destructuring approach (the current implementation) is recommended. This approach provides the flexibility to update the state correctly, ensures immutability, and handles potential asynchronous state updates effectively. It's particularly suitable for forms with multiple input fields and complex state management requirements.
  //      */
  //   }
  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         changedAmount: event.target.value,
  //       }
  //     })
  //     // setUserInput({
  //     //   ...userInput,
  //     //   changedAmount: event.target.value,
  //     // })
  //     // setChangedAmount(event.target.value)
  //     // console.log('amount chnaged')
  //   }
  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         changedDate: event.target.value,
  //       }
  //     })
  //     // setUserInput({
  //     //   ...userInput,
  //     //   changedDate: event.target.value,
  //     // })
  //     // setChangedDate(event.target.value)
  //     // console.log('date chnaged')
  //   }

  const inputChangeHandler = (identifier, value) => {
    setUserInput((prevState) => {
      if (identifier === 'title') {
        return {
          ...prevState,
          changedTitle: value,
        }
      } else if (identifier === 'amount') {
        return {
          ...prevState,
          changedAmount: value,
        }
      } else {
        return {
          ...prevState,
          changedDate: value,
        }
      }
    })
  }
  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: userInput.changedTitle,
      amount: userInput.changedAmount,
      date: new Date(userInput.changedDate),
    }
    setUserInput({
      changedTitle: '',
      changedAmount: '',
      changedDate: '',
    })
    console.log('submithandler')
    // console.log(expenseData)

    props.onSaveExpenseData(expenseData)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={userInput.changedTitle}
            onChange={(event) =>
              inputChangeHandler('title', event.target.value)
            }
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.changedAmount}
            onChange={(event) =>
              inputChangeHandler('amount', event.target.value)
            }
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.changedDate}
            onChange={(event) => inputChangeHandler('date', event.target.value)}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelExpenseData}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
