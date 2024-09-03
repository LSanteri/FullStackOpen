import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticLine = ({text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = (props) => {
  const {good, neutral, bad, total, average, percentage} = props.statistics;

  if(total === 0){
    return(
      <div>No feedback given</div>
    )
  }
 return (
  <div>
    <h2>Statistics</h2>
    <StatisticLine text="good" value={good}/>
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="total" value={total}/>
    <StatisticLine text="average" value={average}/>
    <StatisticLine text="positive" value={percentage}/>
  </div>
)
}


const App = () => {
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
      <Button onClick= {handleGood} text="good" />
      <Button onClick= {handleNeutral} text="neutral" />
      <Button onClick= {handleBad} text="bad" />

      <Statistics statistics={{good: good, neutral: neutral, bad: bad, total: total, average: average, percentage: percentage}} />
    </div>
  )
}

export default App