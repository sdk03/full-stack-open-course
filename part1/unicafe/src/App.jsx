import { useState } from "react"

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const StatsLine = ({text, value, suffix}) => {
  return(
  <tr>
  <td>{text}</td>
    <td>{value}{suffix ? suffix : ''}</td>
  </tr>
  )
}

const FeedbackSection = ({good,neutral,bad,setGood,setNeutral,setBad}) => {
  
 
  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
    </div>
  )
}

const StatsSection = ({good,neutral,bad}) => {
  const total = good + bad + neutral
  const avg = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positivePercent = (good / total) * 100
  
   if (total == 0){
      return <p>No feedback given</p>
   }
   else{
    return(
     <div>
      <h1>statistics</h1>

      <table>
        <tbody>
           <StatsLine text={'good'} value={good} />
          <StatsLine text={'neutral'} value={neutral} />
          <StatsLine text={'bad'} value={bad} />
          <StatsLine text={'all'} value={total} />
          <StatsLine text={'average'} value={avg} />
          <StatsLine text={'positive'} value={positivePercent} suffix={'%'}/>
        </tbody>
      </table>

     
    </div>
    )
   }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  return(
    <>
    <FeedbackSection good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
    <StatsSection good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App