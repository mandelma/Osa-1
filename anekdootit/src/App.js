import React, {useState} from 'react';

function App() {
  const [select, setSelected] = useState(0)

  const changeAnecdote = () => {
    const index = Math.floor((Math.random() * anecdotes.length))
    setSelected(index)
  }

  return (
    <div>
      <p>{anecdotes[select]}</p>
      <button onClick = {changeAnecdote}>next anecdote</button>
    </div>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percentn\
  of the developer time... The remaining 10 percent of the code accountsn\
  for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good priogrammersn\
  write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writeng the code in the first place. Therefore,n\
  if you write the code as cleverly as possible, you are, by definition,n\
  not smart enough to debug it.'
]

export default App;
