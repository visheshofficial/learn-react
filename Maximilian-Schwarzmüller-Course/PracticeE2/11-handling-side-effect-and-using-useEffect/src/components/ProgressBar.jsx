import { useEffect, useState } from 'react'

export default function ProgressBar({ TIMER }) {
  const [remainingTime, setremainingTime] = useState(TIMER)

  useEffect(() => {
    const interval = setInterval(() => {
      setremainingTime((prevTime) => prevTime - 10)
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <progress value={remainingTime} max={TIMER}></progress>
}
