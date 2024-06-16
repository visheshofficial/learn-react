import React, { useState } from 'react'

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  const handleButtonClick = () => {
    if (isEditing) {
      // If we're currently editing, save the changes
      // (you might want to do something with currentName here, like sending it to the server)
    }
    setIsEditing((prevIsEditing) => !prevIsEditing)
    if (isEditing) {
      onNameChange(symbol, playerName)
    }
  }
  /*
The line setIsEditing(!isEditing) is a common way to toggle a 
boolean state in React. However, when you're updating state based on the 
previous state, it's recommended to use the functional update form of setState.
This ensures that you're always working with the most recent state.

Here's how you can do it:
setIsEditing(prevIsEditing => !prevIsEditing);

In this line, setIsEditing is called with a function as an argument.
 This function receives the previous state (prevIsEditing) and returns the new state. 
 This is the recommended way to update state when the new state depends on the previous one
  */

  const handleNameChange = (event) => {
    setPlayerName(event.target.value)
  }

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          <span className="player-name">
            {isEditing ? (
              <input value={playerName} onChange={handleNameChange} /> // two way binding
            ) : (
              playerName
            )}
          </span>
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleButtonClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </li>
    </>
  )
}
