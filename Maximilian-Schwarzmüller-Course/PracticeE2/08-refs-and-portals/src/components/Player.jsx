import { useState, useRef } from 'react'

export default function Player() {
  const playerName = useRef()
  const [enteredPlaterName, setenteredPlaterName] = useState()

  function handleClick() {
    setenteredPlaterName(playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlaterName ?? 'Guest'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}
