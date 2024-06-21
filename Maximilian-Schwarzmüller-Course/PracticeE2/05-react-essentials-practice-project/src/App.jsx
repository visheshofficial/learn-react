import { Fragment } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import { useState } from 'react'
import Results from './components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })
  const inputIsValid = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      // console.log({ ...previousUserInput, [inputIdentifier]: newValue })
      return { ...previousUserInput, [inputIdentifier]: +newValue }
    })
  }

  return (
    <Fragment>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />

      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && <p className="center">Please enter valid duration </p>}
    </Fragment>
  )
}

export default App
