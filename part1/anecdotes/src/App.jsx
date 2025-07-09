import { useState } from "react";

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const MostVotedAnecdote = ({anecdote, votes}) => {
  return(
    <>
    <h1>Anecdote with most votes</h1>
    <span>{anecdote}</span>
    <br />
    <span>has {votes} votes</span>
    </>
  )

}

const App = () => {

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState([0,0,0,0,0,0,0,0])
  const [mostVoted, setMostVoted] = useState(0)

  const randomSelected = () => {
         
    const min = Math.ceil(0)
    const max = Math.ceil(7)
    return Math.floor(Math.random() * (max - min + 1)) + min

  }


  const nextAnecdote = () =>{
    // using random generator for randomness
    let nextSelected = randomSelected()
    setSelected(nextSelected)
  }

  const updateVote = () =>{
    //since it is a complex state data type, you copy first, append, and then update. DO NOT DIRECTLY UPDATE COMPLEX USER STATE DATA STRUCTS
    const copy = [...vote]
    copy[selected] += 1
    setVotes(copy)

    const maxVote = Math.max(...copy);
    const maxIndex = copy.indexOf(maxVote);

    console.log(maxIndex); // 3

    setMostVoted(maxIndex)


  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <span>has {vote[selected]} votes</span>
      <br />
      <Button onClick={updateVote} text={'vote'} />
      <Button onClick={nextAnecdote} text={'next anecdote'} />
      <br />
      <br />
      <MostVotedAnecdote anecdote={anecdotes[mostVoted]} votes={vote[mostVoted]}/>
    </div>
  )

}

export default App