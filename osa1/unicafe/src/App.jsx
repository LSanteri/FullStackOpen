import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)



  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(bad + neutral + updatedGood)
    setAverage((updatedGood - bad) / (bad + neutral + updatedGood))
    setPercentage(100 * updatedGood / (bad + neutral + updatedGood))
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(bad + updatedNeutral + good)
    setAverage((good - bad) / (bad + updatedNeutral + good))
    setPercentage(100 * good / (bad + updatedNeutral + good))
  }

  const handleBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotal(updateBad + neutral + good)
    setAverage((good - updateBad) / (updateBad + neutral + good))
    setPercentage(100 * good / (updateBad + neutral + good))
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => handleGood(good + 1)}>
      good
      </button>
      <button onClick={() => handleNeutral(neutral + 1)}>
      neutral
      </button>
      <button onClick={() => handleBad(bad + 1)}>
      bad
      </button>
      <h2><p>Statistics</p></h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {percentage}%</p>

    </div>
  )
}

export default App