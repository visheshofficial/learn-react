import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'

const Form = styled.form`
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;

    & input {
      margin: 2rem auto;
      padding: 1rem;
      width: 90%;
      max-width: 40rem;

      &:focus {
        outline: none;
        border-color: #4f005f;
      }
    }
  }

  & button {
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;
  }

  .button:hover,
  .button:active {
    background: #741188;
    border-color: #741188;
  }

  .button:focus {
    outline: none;
  }
`

const AddUser = () => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Username: ${username}, Age: ${age}`)
    setUsername('')
    setAge('')
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit" />
      </Form>
    </Card>
  )
}

export default AddUser
