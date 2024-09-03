import { useState } from 'react';

const App = () => {
  const anekdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anekdotes.length).fill(0))

  const handleNextAnekdote = () => {
    const randomIndex = Math.floor(Math.random() * anekdotes.length)
    setSelected(randomIndex);
  }

  const handleVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1;
    setVotes(votesCopy)
  }

  const maxVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anekdote of the day</h1>
      <p>{anekdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnekdote}>Next Anekdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anekdotes[maxVotes]}</p>
      <p>has {votes[maxVotes]} votes</p>
    </div>
  )
}

export default App;
