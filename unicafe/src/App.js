import React, {useState} from 'react';

import './style.css'

const Button = (props) => {
  return(
    <button onClick = {props.handler}>
      {props.teksti}
    </button>
  )
}

function App() {
  const [feedBack, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const goodHandler = () => {
    const newFeedback = {
      ...feedBack,
      good: feedBack.good + 1
    }
    setFeedback(newFeedback)
  }

  const neutralHandler = () => {
    const newFeedback = {
      ...feedBack,
      neutral: feedBack.neutral + 1
    }
    setFeedback(newFeedback)
  }

  const badHandler = () => {
    const newFeedback = {
      ...feedBack,
      bad: feedBack.bad + 1
    }
    setFeedback(newFeedback)
  }

  const all = feedBack.good + feedBack.neutral + feedBack.bad
  const average = all > 0 ? ((feedBack.good - feedBack.bad) / all) : 0
  const positive = all > 0 ? ((feedBack.good / all) * 100) : 0

  return (
    <div>
      <h1>Give feedback</h1>
      <Button className = "button"
        handler = {goodHandler}
        teksti = "good" 
      />
      <Button className = "button"
        handler = {neutralHandler}        
        teksti = "neutral"
      />
      <Button className = "button"
        handler = {badHandler}
        teksti = "bad"
      />
      <h1>Statistics</h1>
      <p className = "vastaus">
        good {feedBack.good}<br/>
        neutral {feedBack.neutral}<br/>
        bad {feedBack.bad}<br/>
        all {all}<br/>
        average {average}<br/>
        positive {positive} %
        
      </p>

    </div>
  )
}

export default App;
