import React, {useState} from 'react';

const App = () => { 
  const [select, setSelected] = useState(0)

  const points = new Array(anecdotes.length).fill(0)
  
  const [vote, setVote] = useState([
    ...points
  ])

  const newpoints = []

  
  const changeAnecdote = (inx) => {
    const index = Math.floor((Math.random() * points.length))

    setSelected(index)
    
  }

  const pointHandler = () => {
    
    for(let i = 0; i < points.length; i++){
      if(i === select){
        newpoints[i] = vote[i] + 1
      }
      else{
        newpoints[i] = vote[i]
      }
    }
    setVote(newpoints)
  }
  

  return (
    <div>
      <p>{anecdotes[select]}</p>
      <p>has {vote[select]} votes</p>
      <button onClick = {pointHandler}>vote</button>
      <button onClick = {changeAnecdote}>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the developer time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good priogrammers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writeng the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export default App;
