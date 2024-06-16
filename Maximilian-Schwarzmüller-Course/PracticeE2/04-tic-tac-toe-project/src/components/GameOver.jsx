export default function GameOVer({ winner, handleRematch }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p> {winner} won!</p>}
      {!winner && <p> It's draw!</p>}
      <button onClick={handleRematch}>RELAUNCH</button>
    </div>
  )
}
