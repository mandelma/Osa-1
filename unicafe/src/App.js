import React, {useState} from 'react';

import './style.css'

const Button = (props) => {
  return(
    <button onClick = {props.handler}>
      {props.teksti}
    </button>
  )
}

const Statistics = (props) => {
  if(props.all > 0){
    return(
      <div className = "vastaus">
        <Statistic tekst = "good" value = {props.good}/>
        <Statistic tekst = "neutral" value = {props.neutral}/>
        <Statistic tekst = "bad" value = {props.bad}/>
        <Statistic tekst = "all" value = {props.all}/>
        <Statistic tekst = "average" value = {props.average}/>
        <Statistic tekst = "positive" value = {props.positive + " %"}/>
      </div>
    )
  }
  return(
    <div>
      {props.noStatistics}
    </div>
  )
}

const Statistic = (props) => {
    return(
      <div>
        {props.tekst} {props.value} <br/>
      </div>
    )
}

function App() {
  const [feedBack, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const [amount, setAmount] = useState([])
  

  const goodHandler = () => {
    const newFeedback = {
      ...feedBack,
      good: feedBack.good + 1
    }
    setFeedback(newFeedback)
    setAmount(amount.concat("g"))
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
      <Statistics
        good = {feedBack.good}
        neutral = {feedBack.neutral}
        bad = {feedBack.bad}
        all = {all}
        average = {average}
        positive = {positive}
        noStatistics = "No feedback given"
      />
    </div>
  )
}

export default App;
