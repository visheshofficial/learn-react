import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, onReset },
  ref
) {
  const userLost = timeRemaining <= 0

  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2)
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)

  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>You won. our score is {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>
        seconds left
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal
