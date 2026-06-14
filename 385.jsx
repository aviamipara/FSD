
// Create a React app:
// • Add Start and Stop buttons
// • When Start is clicked, counter increments every second
// • When Stop is clicked, counter stops
// • Use useEffect with cleanup


import { useState, useEffect } from 'react'

function PB385() {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(function () {
        let timer

        if (isRunning) {
            timer = setInterval(function () {
                setCount(function (prevCount) {
                    return prevCount + 1
                })
            }, 1000)
        }

        // Cleanup function to clear the interval when stopping or unmounting
        return function () {
            clearInterval(timer)
        }
    }, [isRunning])

    function handleStart() {
        setIsRunning(true)
    }

    function handleStop() {
        setIsRunning(false)
    }

    return (
        <div>
            <h2>Timer Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default PB385